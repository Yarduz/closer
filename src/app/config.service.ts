import { Injectable } from '@angular/core';
import { OpenningPageComponent } from './openning-page/openning-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { Question } from "src/interface/Question";
import mockQuestion from '../assets/mockQuestion.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  currentQuestion: Question
  showHints: boolean;

  constructor() {
    this.showHints = false;
    this.currentQuestion = mockQuestion as Question;
  }

  // openning = OpenningPageComponent;
  // game = GamePageComponent;
  // withHints = () => {
  //   this.showHints = true;
  // }

  // withoutHints = () => {
  //   this.showHints = false;
  // }
}
