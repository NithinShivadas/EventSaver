import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent implements OnInit {
  event: any;
  userEmail: any;
  eventName: any;
  eventDate: any;
  eventOwner: any;
  eventPriority: any;

  constructor(
    private ser: ServiceService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getEvent();
    //window.location.reload()
  }

  getEvent() {
    this.ser.getEventData().subscribe((data) => {
      console.log(data);
      this.event = data;
      this.userEmail = this.event.userEmail;
      this.eventName = this.event.eventName;
      this.eventDate = this.event.EventDate;
      this.eventOwner = this.event.Eowner;
      this.eventPriority = this.event.priority;
      this.router.navigateByUrl('/eventPage');
      
    });
    //window.location.reload()
  }

  deleteEvent(id: any) {
    if (confirm('Are you sure you want to delete this event'))
      this.http.delete('http://localhost:3000/api/delete/' + id).subscribe(
        (data) => {
          console.log('delete datasss', data);
          this.http
            .post('http://localhost:3000/api/deleteadd', data)
            .subscribe((data) => {
              if (data) {
                console.log('dadada', data);
              }
            });
        },
        (err) => {
          console.log('error', err);
        }
      );
  }
}
