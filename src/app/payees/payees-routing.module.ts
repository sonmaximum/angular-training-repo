import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PayeesManagerComponent } from "./payees-manager/payees-manager.component";
import { PayeeDetailFetcherComponent } from "./payee-detail-fetcher/payee-detail-fetcher.component";
import { PayeesListComponent } from "./payees-list/payees-list.component";

const routes: Routes = [
  {
    path: "payees",
    component: PayeesManagerComponent,
    children: [
      {
        path: "detail/:id",
        component: PayeeDetailFetcherComponent
      },
      {
        path: "list",
        component: PayeesListComponent
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "list"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayeesRoutingModule {}
