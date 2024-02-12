import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-module-questions',
  templateUrl: './module-questions.page.html',
  styleUrls: ['./module-questions.page.scss'],
})
export class ModuleQuestionsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  choose(){
    this.router.navigate(['game-mode'])
  }

}
