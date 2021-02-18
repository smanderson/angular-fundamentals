import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../models';
import { EventService } from '../services/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;

  constructor(private eventService: EventService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(
      +this.activateRoute.snapshot.params['id']
    );
  }
}
