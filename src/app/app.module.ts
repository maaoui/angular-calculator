import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RadioBtnComponent } from './radio-btn/radio-btn.component';
import { NormalcalcComponent } from './normalcalc/normalcalc.component';
import { ScicalcComponent } from './scicalc/scicalc.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioBtnComponent,
    NormalcalcComponent,
    ScicalcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
