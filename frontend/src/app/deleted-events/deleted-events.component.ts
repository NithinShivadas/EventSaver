import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-deleted-events',
  templateUrl: './deleted-events.component.html',
  styleUrls: ['./deleted-events.component.css'],
})
export class DeletedEventsComponent implements OnInit {
  event: any;
  constructor(private ser: ServiceService) {}

  ngOnInit(): void {
    this.getEvent();
  }
  getEvent() {
    this.ser.getDelEventData().subscribe((data) => {
      console.log(data);
      this.event = data;
    });
  }
}
