import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Country {
  val: string;
  name: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  loading: Boolean;
  signupForm: FormGroup;
  countries: Country[] = [
    { val: 'CR', name: 'Croatia' },
    { val: 'ME', name: 'Montenegro' },
    { val: 'RS', name: 'Serbia' },
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      serviceName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  signup() {
    this.loading = true;
    if (this.signupForm.invalid) {
      this.loading = false;
      return;
    }

    this.authService.signUp(this.signupForm.value).subscribe(
      (res) => {
        if (res.response) {
          // insert here toast message for success registration
          this._snackBar.open(res.msg, 'OK', {
            duration: 5000,
          });
        }
        this.loading = false;
      },
      (err) => {
        if (err.error.msg) {
          this._snackBar.open(err.error.msg, 'OK', {
            duration: 3000,
          });
        }
        this.loading = false;
      }
    );
  }
}
