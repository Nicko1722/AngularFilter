import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import {Service} from "./components/services/office.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
