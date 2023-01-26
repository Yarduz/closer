import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenningPageComponent } from './openning-page/openning-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { EndPageComponent } from './end-page/end-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenningPageComponent,
    GamePageComponent,
    EndPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
