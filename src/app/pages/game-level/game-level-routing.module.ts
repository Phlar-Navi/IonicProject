import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameLevelPage } from './game-level.page';

const routes: Routes = [
  {
    path: '',
    component: GameLevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameLevelPageRoutingModule {}
