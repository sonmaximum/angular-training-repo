import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

import { PayeesRoutingModule } from "./payees-routing.module";
import { PayeesManagerComponent } from "./payees-manager/payees-manager.component";
import { PayeeDetailComponent } from './payee-detail/payee-detail.component';
import { PayeeDetailFetcherComponent } from './payee-detail-fetcher/payee-detail-fetcher.component';
import { PayeesListComponent } from './payees-list/payees-list.component';

@NgModule({
  declarations: [PayeesManagerComponent, PayeeDetailComponent, PayeeDetailFetcherComponent, PayeesListComponent],
  imports: [CommonModule, SharedModule, PayeesRoutingModule],
  exports: [PayeesManagerComponent, PayeeDetailComponent]
})
export class PayeesModule {}
