import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoanComponent } from './loan/loan.component';
import { LoanService } from './loan/loan.service';


@NgModule({
  declarations: [
    AppComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LoanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
