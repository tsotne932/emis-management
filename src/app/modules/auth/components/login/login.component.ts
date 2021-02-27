import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagementService } from 'src/app/modules/management/service/management.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private _fb: FormBuilder, private _auth: AuthService) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.form = this._fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  login() {
    this._auth.login(this.form.value).subscribe()
  }

  get errorMessage() {
    if (this.form.get('email').hasError('required')) {
      return 'სავალდებულო ველი';
    }
    if (this.form.get('password').hasError('required')) {
      return 'სავალდებულო ველი';
    }

    return this.form.get('email').hasError('email') ? 'არასწორი ელ-ფოსტა' : '';
  }
}
