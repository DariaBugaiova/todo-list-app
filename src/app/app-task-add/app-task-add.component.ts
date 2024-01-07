import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-task-add',
  templateUrl: './app-task-add.component.html',
  styleUrl: './app-task-add.component.scss'
})
export class AppTaskAddComponent implements OnInit {
  @Output() addTask = new EventEmitter<{title: string}>();

  taskForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title : ['', [Validators.required]]
    })
  }

  // emit value for creating the task
  taskAdded() {
    if(this.taskForm.valid) {
      this.addTask.emit(this.taskForm.value)
    } else {
      alert('Write the name of task!')
    }
  }
}
