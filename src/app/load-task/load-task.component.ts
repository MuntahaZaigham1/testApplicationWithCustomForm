import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { tasks } from 'src/flowable-tasks/tasks';
import { ComponentResolver } from '../component-resolver/component-resolver';

@Component({
  selector: 'app-load-task',
  templateUrl: './load-task.component.html',
  styleUrls: ['./load-task.component.scss']
})
export class LoadTaskComponent implements OnInit {

  myTasks: any[] = [];
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer!: ViewContainerRef;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { 
    this.myTasks = tasks;
  }

  openComponent(task: any) {
    let componentFactory;
    componentFactory = ComponentResolver.resolveComponentByKey(task?.data?.[0]?.formKey);
    this.dynamicComponentContainer.clear();
    const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);
  }

  ngOnInit(): void {
    
  }

}
