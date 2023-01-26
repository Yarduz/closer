import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-game-page',
  template: `
  <header class="header justify-content-center">
    <h2>category - category</h2>
    <div class="d-flex">
      <div class="time d-flex">
        <h3 class="m-2">time:</h3>
        <h3 class="m-2">time</h3>
      </div>
      <div class="score d-flex">
        <h3 class="m-2">score:</h3>
        <h3 class="m-2">score</h3>
      </div>
    </div>
  </header>
  <main class="d-flex flex-column">
    <div class="question">
      <h3>how tall is the average pakistani?</h3>
    </div>
    <div class="answer">
     <input id="answer" type="text"> 
    </div>
    <div class="hint">
      <p>shortest in the world</p>
    </div>
  </main>
  `,
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {
  showHints = false
  static showHints: any;
}
