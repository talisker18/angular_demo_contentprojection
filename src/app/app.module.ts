import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppCardComponent } from './app-card/app-card.component';
import { AppCardListComponent } from './app-card-list/app-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCardComponent,
    AppCardListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
