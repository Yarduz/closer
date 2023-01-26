import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-openning-page',
  template: `
  <main>
    <h1>Welcome to the closer!</h1>
    <p id="instructions">the instructions are pretty simple - every player gets the same question, every question have a nuber as an answer, everyone get points based of how close you get in relation to the others. for example, if you have 3 players in a game, the one how gave the closest answer gets two point, the one who gave the second closest answer get one point and the player who gave the third closest answer get no points. you can also choose between a game with hints or without hints. </p>
    <button class="startB" id="with">start game with hints</button>
    <button class="startB" id="without">start game without hints</button>
  </main>
  `,
  styleUrls: ['./openning-page.component.css']
})
export class OpenningPageComponent {

  startWithHints() {

  }
  startWithoutHints() {

  }

}
