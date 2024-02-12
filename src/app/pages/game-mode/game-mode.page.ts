import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-game-mode',
  templateUrl: './game-mode.page.html',
  styleUrls: ['./game-mode.page.scss'],
})
export class GameModePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  solo(){
    this.router.navigate(['loading']);
  }

}
