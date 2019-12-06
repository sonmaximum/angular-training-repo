import { Component, OnInit } from "@angular/core";
import { Column } from "src/app/shared/data-grid/data-grid.component";
import { Payee } from "../payees-types";
import { PayeesDaoService } from "../payees-dao.service";
import { Router } from '@angular/router';

@Component({
  selector: "isc-payees-list",
  templateUrl: "./payees-list.component.html",
  styles: []
})
export class PayeesListComponent implements OnInit {
  payees: Payee[];

  columns: Column[] = [
    { field: "payeeName", label: "Payee Name" },
    { field: "address.city", label: "City" },
    { field: "address.state", label: "State" }
  ];
  constructor(private dao: PayeesDaoService, private router:Router) {}

  ngOnInit() {
    //this.payees = this.dao.getPayees();

    this.dao.getPayees().subscribe(
      payees => (this.payees = payees),
      error => console.error(error)
    );
  }

  handleSelectRow(payee: Payee) {
    console.log('and payee is still ',payee)
    this.router.navigate(['payees','detail',payee.id])
  }
}
