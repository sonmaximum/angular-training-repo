import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TransactionsManagerComponent } from "./transactions-manager/transactions-manager.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "tx",
    component: TransactionsManagerComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "payees"
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
