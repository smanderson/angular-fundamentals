import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'events-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event:any;

  constructor() { }

  ngOnInit(): void {
  }
}
