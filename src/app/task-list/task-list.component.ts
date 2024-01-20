import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskStatus } from '../model/task-enum';
import { TasksService } from '../services/task-list.service';
import { Store } from "@ngrx/store";
import { actions } from '../store/action';
import { taskSelector } from '../store/reducer';
import * as taskActions from "../../app/store/action"


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
tasks: Task[] = [];

constructor( private store: Store<Task[]> ){}

ngOnInit() {
  this.loadTasks();
  this.store.select(taskSelector).subscribe(state => this.tasks = state)
}

// edit task status
editStatus(task: Task, flag: boolean) {
    let updatedTask = {
      id: task.id, 
      completed: !!flag, 
      title: task.title
    }
    this.store.dispatch(actions.updateTaskAction(updatedTask)
    )
  }

// remove task
deleteTask(task: Task){
  this.store.dispatch(actions.deleteTaskAction(task));
  }

addTask(task: { title: string; }){
  this.store.dispatch(taskActions.actions.addTaskAction(
    new Task(task.title, (this.tasks[this.tasks.length - 1]?.id || 0))
  ))
}

loadTasks() {
  this.store.select(taskSelector).subscribe(state => this.tasks = state)
 }
}