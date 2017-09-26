import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {TrackingTimeService} from "./tracking-time.service";
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SigningComponent} from './signin/signin.component';
import {MaterialModule} from "./material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SigningComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TrackingTimeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
