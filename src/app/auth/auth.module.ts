import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardActions, MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {path: '', children: [
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: RegisterComponent }

    ]}
]

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule, 
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        RouterModule.forChild(routes),
        // StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),

        ],
})
export class AuthModule {

}