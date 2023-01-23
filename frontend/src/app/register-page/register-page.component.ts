import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  registerPage: any = this.fb.group({
    Name: ['', [Validators.required]],
    Email: ['', [Validators.required,Validators.email]],
    Dob: ['', [Validators.required]],
    Password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ser: ServiceService
  ) {}

  ngOnInit(): void {}
  
  Register() {
    var Name = this.registerPage.value.Name;
    var Email = this.registerPage.value.Email;
    var dob = this.registerPage.value.Dob
    var Password = this.registerPage.value.Password;
    if (this.registerPage.valid) {

        this.ser.register(Name, Email, dob , Password).subscribe(
          (result: any) => {
            if (result) {
              alert(result.message);

              this.router.navigateByUrl('login');
            }
          },
          (result) => {
            alert(result.error.message);
            //this.router.navigateByUrl('Welcome')
          }
        );
      
    } else {
      alert('please fill all the fields');
    }
  }
}
