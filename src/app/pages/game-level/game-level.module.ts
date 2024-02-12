import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameLevelPageRoutingModule } from './game-level-routing.module';

import { GameLevelPage } from './game-level.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameLevelPageRoutingModule
  ],
  declarations: [GameLevelPage]
})
export class GameLevelPageModule {}
