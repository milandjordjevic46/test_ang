import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  hasError: Boolean;
  loading: Boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login() {
    this.loading = true;
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
      (res) => {
        localStorage.setItem('mservice_tok', res.token)
        this.router.navigate(['admin/home']);
        this.hasError = false;
        this.loading = false;
      },
      (err) => {
        if (err.error && err.error.msg) {
          this.hasError = true;
          this.loading = false;
          console.log(err.error.msg);
        }
      }
    );
  }

  get f() {
    return this.loginForm.controls;
  }
}
