import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthserivesService } from 'src/app/shared/services/authserives.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  type: string = 'users';
  logInForm = this.fb.group({
    type: [this.type],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required])],
  });
  submitted: boolean = false;
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthserivesService,
    private router: Router,
    public toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  get f() {
    return this.logInForm.controls;
  }

  getUser() {
    this.auth.getUser().subscribe((res: any) => {
      this.users = res;
    });
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.logInForm.invalid) {
      return;
    }

    let index = this.users.findIndex(
      (item) =>
        item.email == this.logInForm.value.email &&
        item.password == this.logInForm.value.password
    );
    if (index == -1) {
      this.toaster.error('This email Or Password Wrong! ', 'Error');
    } else {
      const model = {
        username: this.users[index].username,
        type: this.type,
      };
      $.ajax({
        url: 'http://localhost:3000/login/1',
        method: 'PUT',
        data: JSON.parse(JSON.stringify(model)),
        dataType: 'json',
        success: (result) => {
          this.toaster.success('Login Successfully', 'Success');
          this.router.navigate(['/']);
        },
      });
    }
  }
}
