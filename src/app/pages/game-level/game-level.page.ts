import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-game-level',
  templateUrl: './game-level.page.html',
  styleUrls: ['./game-level.page.scss'],
})
export class GameLevelPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  start(){
    this.router.navigate(['question-types']);
  }

}
