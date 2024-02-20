import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { tasks } from 'src/flowable-tasks/tasks';
import { ComponentResolver } from './component-resolver/component-resolver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testApplicationWithCustomForms';
}
