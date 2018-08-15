import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  name = '';

  onUserInput(event) {
    this.name = event.target.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
