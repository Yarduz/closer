import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndPageComponent } from './end-page/end-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { OpenningPageComponent } from './openning-page/openning-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/openning', pathMatch: 'full'
  },
  {
    path: 'openning',
    component: OpenningPageComponent
  },
  {
    path: 'game',
    component: GamePageComponent
  },
  {
    path: 'results',
    component: EndPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
