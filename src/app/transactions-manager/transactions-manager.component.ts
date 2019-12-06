import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "isc-transactions-manager",
  template: `
    <h2>Transactions Manager</h2>
    <hr>
    <p>
      Click
      <button
        type="button"
        class="btn btn-primary"
        (click)="handleButtonClick()"
      >
        here
      </button>
      to go to the Payees view
    </p>
  `,
  styles: []
})
export class TransactionsManagerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  handleButtonClick() {
    console.log("button clicked");
    this.router.navigate(["/payees"]);
  }
}
