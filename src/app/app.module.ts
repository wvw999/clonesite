import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostingComponent } from './posting/posting.component';
import { AdsComponent } from './ads/ads.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostingComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
