import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TasksService } from './services/task-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-list-app';

  tasks!: Task[];
  constructor(private tasksService: TasksService){
    this.tasks = [];
  }

  ngOnInit(): void {
    this.tasksService.getTaskItems().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask(task: { title: string; }){
    this.tasksService.addTaskItem(new Task(task.title, (this.tasks[this.tasks.length - 1]?.id || 0))).subscribe(task =>
      this.tasks.push(task));
    }
  }

  // deleteTodo(id) {
  //   //delete in UI
  //   this.tasks = this.tasks.filter((t) => t.id !== id);
  //   //delete in devServerTarget
  //   this.tasksService
  //     .deleteTaskItem(id)
  // }
