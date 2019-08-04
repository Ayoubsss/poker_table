import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PokertableComponent } from './pokertable/pokertable.component';
import { PlayerInputComponent } from './player-input/player-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PokertableComponent,
    PlayerInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
