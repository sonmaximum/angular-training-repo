import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GreetingHeaderComponent } from "./greeting-header/greeting-header.component";
import { SimpleButtonComponent } from "./simple-button.component";
import { PersonalGreeterComponent } from "./personal-greeter/personal-greeter.component";
import { PayeesModule } from "./payees/payees.module";
import { SharedModule } from "./shared/shared.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { TransactionsManagerComponent } from "./transactions-manager/transactions-manager.component";

@NgModule({
  declarations: [
    AppComponent,
    GreetingHeaderComponent,
    SimpleButtonComponent,
    PersonalGreeterComponent,
    NavbarComponent,
    HomeComponent,
    TransactionsManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PayeesModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
