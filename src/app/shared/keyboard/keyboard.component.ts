import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ay-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  public keys = [
    {number: 1},
    {number: 2, char: 'ABC'},
    {number: 3, char: 'DEF'},
    {number: 4, char: 'GHI'},
    {number: 5, char: 'JKL'},
    {number: 6, char: 'MNO'},
    {number: 7, char: 'PQRS'},
    {number: 8, char: 'TUV'},
    {number: 9, char: 'WXYZ'},
    {number: 0, char: '+'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
