import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleQuestionsPageRoutingModule } from './module-questions-routing.module';

import { ModuleQuestionsPage } from './module-questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleQuestionsPageRoutingModule
  ],
  declarations: [ModuleQuestionsPage]
})
export class ModuleQuestionsPageModule {}
