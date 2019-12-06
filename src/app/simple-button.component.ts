import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "isc-simple-button",
  template: `
    <button type="button" (click)="handleClick()">Click me</button>
  `,
  styles: []
})
export class SimpleButtonComponent implements OnInit {
  @Output()
  customClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  handleClick() {
    console.log("You clicked on the button.");
    this.customClick.emit("hello");
  }
}
