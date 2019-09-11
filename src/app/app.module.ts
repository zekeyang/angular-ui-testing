import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ButtonModule, InputModule, StructuredListModule, ContentSwitcherModule, DatePickerModule } from "carbon-components-angular"; 
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  ButtonModule, 
                  InputModule, 
                  StructuredListModule,
                  ContentSwitcherModule,
                  DatePickerModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
