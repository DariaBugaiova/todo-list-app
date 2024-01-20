import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserI } from 'src/app/model/user';
import { Store } from '@ngrx/store';
import { showalert } from '../../store/common/app.action';
import { beginRegister } from '../../store/user/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private builder: FormBuilder, private store: Store){}

  registerForm = this.builder.group({
    username: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    password: this.builder.control('', Validators.required),
    confirm_password: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    phone: this.builder.control('', Validators.required),
  })

  proceedRegister(){
    if(this.registerForm.valid){

      if (this.registerForm.value.password === this.registerForm.value.confirm_password) {
        const _userobj: UserI = {
          username: this.registerForm.value.username as string,
          password: this.registerForm.value.password as string,
          email: this.registerForm.value.email as string,
          phone: this.registerForm.value.phone as string,
          role: 'user',
          status: true
        }
        this.store.dispatch(beginRegister({ userdata: _userobj }))

      } else {
        this.store.dispatch(showalert({ message: 'Password mismatch', resulttype: 'fail' }))
      }
    }
  }

}
