import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponente1 } from './app.componente1';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponente1
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponente1]
})
export class AppModule { }
