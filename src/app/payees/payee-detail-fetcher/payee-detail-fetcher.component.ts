import { Component, OnInit } from "@angular/core";
import { PayeesDaoService } from "../payees-dao.service";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ParamMap
} from "@angular/router";
import { Payee } from "../payees-types";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "isc-payee-detail-fetcher",
  template: `
    <isc-payee-detail
      *ngIf="payeeResolved"
      [payee]="payeeResolved"
    ></isc-payee-detail>
  `,
  styles: []
})
export class PayeeDetailFetcherComponent implements OnInit {
  payee$: Observable<Payee>;
  payeeResolved: Payee;
  constructor(
    private dao: PayeesDaoService,
    private route: ActivatedRoute //private routeSnapshot: ActivatedRouteSnapshot
  ) {}

  ngOnInit() {
    this.payee$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.dao.getPayeeById(params.get("id"));
      })
    );

    this.payee$.subscribe(payee => (this.payeeResolved = payee));

    //const payeeIdSnapshot = this.routeSnapshot.paramMap.get("id");
  }
}
