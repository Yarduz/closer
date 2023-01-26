import { Injectable } from '@angular/core';
import { OpenningPageComponent } from './openning-page/openning-page.component';
import { GamePageComponent } from './game-page/game-page.component';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  openning = OpenningPageComponent
  game = GamePageComponent
  showHints: boolean = this.game.showHints
  withHints = () => {
    this.showHints = true
  }
  withoutHints = () => {
    this.showHints = false
  }
}
