import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginpage = this.formb.group({
    Email: ['', [Validators.required]],
    Password: ['', [Validators.required]],
  });

  constructor(
    private formb: FormBuilder,
    private router: Router,
    private ser: ServiceService
  ) {}

  ngOnInit(): void {}

  Login() {
    var Email = this.loginpage.value.Email;
    var Password = this.loginpage.value.Password;
    if (this.loginpage.valid) {
      this.ser.login(Email, Password).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            this.router.navigateByUrl('/home');
            localStorage.setItem('EvntOwner',result.name)
            localStorage.setItem('eventEmail',result.email)

          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('please fill all the fields');
    }
  }
}
