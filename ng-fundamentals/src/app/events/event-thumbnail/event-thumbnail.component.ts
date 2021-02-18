import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../models';

@Component({
  selector: 'events-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent;

  constructor() { }

  ngOnInit(): void {
  }
}
