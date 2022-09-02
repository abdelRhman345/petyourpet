import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthserivesService } from 'src/app/shared/services/authserives.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  userForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  submitted: boolean = false;
  user: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthserivesService,
    public toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  // For EASY Access to form Fields
  get f() {
    return this.userForm.controls;
  }

  getUsers() {
    this.auth.getUser().subscribe((res: any) => {
      this.user = res;
    });
  }

  // If user Confirm
  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    const model = {
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      confirmPassword: this.userForm.value.confirmPassword,
    };

    let index = this.user.findIndex(
      (item) => item.email == this.userForm.value.email
    );

    if (index !== -1) {
      this.toaster.error('This user Have account', 'Error');
    } else {
      $.ajax({
        url: 'http://localhost:3000/users',
        method: 'POST',
        data: JSON.parse(JSON.stringify(model)),
        dataType: 'json',
        success: (result) => {
          this.toaster.success('Successfully', 'Success');
          this.router.navigate(['/']);
        },
      });
    }
  }

  // To Send Email
  sendEmail() {
    const model = {
      username: this.userForm.value.username,
      email: this.userForm.value.email,
    };

    let index = this.user.findIndex(
      (item) => item.email == this.userForm.value.email
    );

    if (index !== -1) {
      this.toaster.error('This user Have account', 'Error');
    } else {
      $.ajax({
        url: 'http://localhost:3000/message',
        method: 'POST',
        data: {
          message: {
            from_email: 'abdelrahman25797@gmail.com',
            to: [
              {
                email: `${model.email}`,
                name: `${model.username}`,
                type: 'to',
              },
            ],
            autotext: 'true',
            subject: 'Confirm Email',
            html: `Please Click <a>HERE</a> to confirm your email`,
          },
        },
        success: (result) => {
          this.toaster.success('Successfully', 'Success');
          this.router.navigate(['/welcome']);
        },
      });
    }
  }
}
