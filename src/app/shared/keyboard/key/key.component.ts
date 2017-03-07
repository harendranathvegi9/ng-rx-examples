import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ay-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
