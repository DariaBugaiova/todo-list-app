import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { TaskListComponent } from './task-list/task-list.component';
import { AppTaskAddComponent } from './app-task-add/app-task-add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { TasksService } from './services/task-list.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { tasksReducer } from './store/reducer';
import { AppRoutingModule } from './app-routing.module';
import { UserReducer } from './store/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';

import { AppEffects } from './store/common/app.effects';
import { UserEffect } from './store/user/user.effects';


const material = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
]

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [   
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexModule, 
    FlexLayoutModule,
    FormsModule,
    material,
    StoreModule.forRoot({
      "tasks": tasksReducer,
      user: UserReducer
    }),
    EffectsModule.forRoot([ AppEffects, UserEffect ])
  ],
  declarations: [
    AppComponent,
    TaskListComponent,
    AppTaskAddComponent,
  ],
  providers: [
    TasksService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
