import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-message',
  changeDetection : ChangeDetectionStrategy.OnPush,
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() person;
  constructor() { }

  ngOnInit() {
  }

}
