import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';
import { NumericDirective } from './numeric.directive';


@NgModule({
  declarations: [
    AppComponent,
    AccordionPanelComponent,
    NumericDirective,
   
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
