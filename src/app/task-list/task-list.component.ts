import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskStatus } from '../model/task-enum';
import { TasksService } from '../services/task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {

@Input() tasks: Task[] | undefined;
constructor(private tasksService: TasksService){}

ngOnInit() {}

// edit task status
editStatus(task: Task) {
  console.log('1', task.completed);
    // task.completed === TaskStatus.Wait ?
    // task.completed = TaskStatus.Ready : TaskStatus.Wait;
    task.completed = task.completed == TaskStatus.Wait ? TaskStatus.Ready : TaskStatus.Wait;
    this.tasksService.updateTaskItem(task).subscribe();
  }

// remove task
deleteTask(task: {id: number}){
  this.tasksService.deleteTaskItem(task.id).subscribe();

    let index = +(this.tasks?.findIndex(item => item['id'] == task.id) || 0)
    console.log(index, task);
    this.tasks?.splice(index, 1)
  }

  // deleteTask(id: number) {
  //     this.tasksService.deleteTaskItem(id).subscribe(
  //       task => { 
  //         let index = this.tasks?.findIndex(item => item.id === task.id ) || 0
  //         this.tasks?.splice(index, 1)
  //       }
  //     );
  // }
}