import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AuthGuard } from './auth/guard'

const routes: Routes = [
  {
    path: 'list',
    component: TaskListComponent,
    canActivate: [ AuthGuard ]

  },
  { 
     path: 'auth',
     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { path: '',   redirectTo: 'list', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
