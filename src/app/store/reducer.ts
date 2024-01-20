import { createReducer, on, createFeatureSelector, createSelector } from "@ngrx/store"
import { Task } from "../model/task"
import { TaskStatus } from "../model/task-enum"
import { actions } from "./action"
import { tasks } from "./app.state"


export const tasksReducer = createReducer(
  tasks,
  on(actions.addTaskAction, (state, task) => {
    console.log('add', [...state, task])
    return [...state, task]
  }),
  on(actions.updateTaskAction, (state, task) => {
    let newTasks = [...state];

    let ind = state.findIndex(t => t.id === task.id)
    newTasks[ind] = task
    console.log([ ...newTasks]);
    return [ ...newTasks];
  }),
  on(actions.deleteTaskAction, (state, task) => {
    let tasks: Task[] = state.filter((t) => t.id != task.id)
    console.log('remove', task)
    return [...tasks]
  }),
)

export const taskSelector = createSelector(createFeatureSelector("tasks"), 
(state: Task[]) => state);


