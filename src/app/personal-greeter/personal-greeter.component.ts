import { Component, OnInit } from "@angular/core";

@Component({
  selector: "isc-personal-greeter",
  templateUrl: "./personal-greeter.component.html",
  styles: [
    `
      .hide {
        display: none;
      }
    `
  ]
})
export class PersonalGreeterComponent implements OnInit {
  yourName = "";

  yourNameDisplay() {
    return { display: this.yourName.length > 2 ? "block" : "none" };
  }

  constructor() {}

  ngOnInit() {}
}
