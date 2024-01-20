



// @Injectable()
// export class TaskEffects {
//   constructor( private actions$ : Actions, 
//                private tasksService : TasksService ) { }

//    loadTasks$ = createEffect(() => this.actions$.pipe(
//    ofType(TaskAction.TaskActionTypes.Load),
//     switchMap(() => {

//       return this.tasksService.getTaskItems().pipe(
//         map((tasks) => {
//             console.log('load task effect', tasks)
//           return new TaskAction.LoadSuccess(tasks)
//         }),
//         catchError(err => of(new TaskAction.LoadFail(err)))
//       )
//     })
//   ))
// }