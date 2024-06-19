// app.module.ts or relevant module

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { UserService } from "../services/userService";
import { CarService } from "../services/carService";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";

import { AppRoutingModule } from "./app.routes";
import { DefaultDisplayModule } from "../components/default-display/default-display.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    DefaultDisplayModule,
  ],
  providers: [
    provideHttpClient(),
    // UserService,
    UserService, 
    CarService,
    ],
  bootstrap: [ ]
})
export class AppModule { }
