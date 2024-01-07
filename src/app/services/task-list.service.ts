import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasksUrl: string = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  getTaskItems(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.tasksUrl}`);
  }

  addTaskItem(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task);
  }

  updateTaskItem(task: Task): Observable<any> {
    console.log('upd');
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http.put<Task>(url, task, );
  }

  deleteTaskItem(id: number): Observable<Task> {
    console.log(id, 'task');
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete<Task>(url, httpOptions);
  }
}