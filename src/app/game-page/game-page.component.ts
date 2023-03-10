import { Component } from '@angular/core';
import { Question } from "src/interface/Question";
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-game-page',
  template: `
  <header class="header justify-content-center">
    <h2>category - {{currentQuestion.category}}</h2>
    <div class="d-flex">
      <div class="time d-flex">
        <h3 class="m-2">time:</h3>
        <h3 class="m-2">{{time}}</h3>
      </div>
      <div class="score d-flex">
        <h3 class="m-2">score:</h3>
        <h3 class="m-2">{{score}}</h3>
      </div>
    </div>
  </header>
  <main class="d-flex flex-column">
    <div class="question">
      <h3>how tall is the average pakistani in cm?</h3>
    </div>
    <div class="answer">
     <input id="answer" type="text"> 
    </div>
    <div *ngIf="showHints" class="hint">
      <p>{{currentQuestion.hint}}</p>
    </div>
    <div *ngIf="timesUp">
      <h3>{{currentQuestion.answer}}</h3>
    </div>
  </main>
  `,
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {
  startCount() {
    setTimeout(() => {
      this.time--
    }
    )
  }
  timesUp: boolean
  currentQuestion: Question
  time: number;
  score: number;
  showHints: boolean;
  constructor(private config: ConfigService) {
    this.showHints = this.config.showHints;
    this.currentQuestion = config.currentQuestion
    this.time = 10;
    this.score = 0;
    this.timesUp = false
    this.startCount()
  }

}
