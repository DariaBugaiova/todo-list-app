import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { UserCred } from 'src/app/model/user';
import { beginLogin } from 'src/app/store/user/user.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private builder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
   localStorage.clear();
  }

  myForm = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  submit() {
    if (this.myForm.valid) {
      const _obj: UserCred = {
        username: this.myForm.value.username as string,
        password: this.myForm.value.password as string
      }
      this.store.dispatch(beginLogin({ usercred: _obj }))
    }
  }

  reset() {
    this.myForm.reset();
  }
}
