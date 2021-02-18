import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { IEvent } from '../models';
import { EventService } from '../services/event.service';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  @Input() events: IEvent[];

  constructor(private eventService: EventService,
              private toastr: ToastrService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.events = this.activatedRoute.snapshot.data['events'];
  }
}
