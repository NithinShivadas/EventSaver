import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  addEventpage = this.fb.group({
    Ename: ['', [Validators.required]],
    Edate: ['', [Validators.required]],
    Eusername: [''],
    Epriority: ['', [Validators.required]],
  });

  showModal: boolean = true;
  OwnerName: any;
  mail: any;
  constructor(
    private fb: FormBuilder,
    private ser: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.OwnerName = localStorage.getItem('EvntOwner');
    this.mail = localStorage.getItem('eventEmail');
   
  }
  AddingEvent() {
    var eventMail = this.mail;
    var eventName = this.addEventpage.value.Ename;
    var eventdate = this.addEventpage.value.Edate;
    var eventOwner = this.OwnerName;
    var priority = this.addEventpage.value.Epriority;
    if (this.addEventpage.valid) {
      this.ser
        .adEvent(eventMail, eventName, eventdate, eventOwner, priority)
        .subscribe(
          (result: any) => {
            if (result) {
              alert('Event Saved Successfully');
              
              //this.showModal=false

              this.router.navigateByUrl('eventPage');
              
              //window.location.reload()
            }
          },
          (result) => {
            alert(result.error.message);
            this.router.navigateByUrl('Welcome');
          }
        );
    } else {
      alert('please fill all the fields');
    }
  }
}
