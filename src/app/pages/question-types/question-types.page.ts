import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-question-types',
  templateUrl: './question-types.page.html',
  styleUrls: ['./question-types.page.scss'],
})
export class QuestionTypesPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  modules(){
    this.router.navigate(['module-questions'])
  }
}
