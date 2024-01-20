import { createAction, props } from "@ngrx/store";
import { Task } from "../model/task";
  
const loadTasksAction = createAction("[TASKS] LOAD_TASKS" )

const addTaskAction = createAction("[TASK] ADD_TASK", props<Task>() )
const updateTaskAction = createAction("[TASK] UPDATE_TASK", props<Task>() )
const deleteTaskAction = createAction("[TASK] DELETE_TASK", props<Task>() )

export const actions = { loadTasksAction, addTaskAction, updateTaskAction, deleteTaskAction }