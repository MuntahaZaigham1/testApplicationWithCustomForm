import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoadTaskComponent } from './load-task/load-task.component';

const routes: Routes = [
  { path: 'UserInfo', component: UserInfoComponent },
  { path: 'LoanApplication', component: LoanApplicationComponent },
  { path: '', component: LoadTaskComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
