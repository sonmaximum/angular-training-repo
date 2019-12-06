import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-greeting-header",
  templateUrl: "./greeting-header.component.html",
  styleUrls: ["./greeting-header.component.css"]
})
export class GreetingHeaderComponent implements OnInit {
  @Input()
  companyInput;

  constructor() {}

  ngOnInit() {}
}
