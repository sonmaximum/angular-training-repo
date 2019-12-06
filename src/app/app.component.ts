import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "intersystems-angular";
  company = "InterSystem Corporation";

  handleCustomClick(message) {
    console.log(
      "AppComponent: You clicked on SimpleButton, it says: ",
      message
    );
  }
}
