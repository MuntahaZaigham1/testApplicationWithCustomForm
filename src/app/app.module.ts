import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MaterialModule } from './material/material.module';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoadTaskComponent } from './load-task/load-task.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    LoanApplicationComponent,
    LoadTaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
