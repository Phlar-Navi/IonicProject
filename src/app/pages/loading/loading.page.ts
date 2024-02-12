import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  progress = 0;
  // public barprogress : HTMLElement | null;

  constructor(public router: Router) {
    setInterval(() => {
      this.progress += 0.01;

      if (this.progress > 1) {
        this.router.navigate(['quiz']);
      }
    }, 50);
    // this.barprogress= document.getElementById("pro-Bar");
  }

  // timer = setInterval(function (){
  //   let bp = this.barprogress;
  //   let pourcentage = parseInt(bp!.getAttribute("data-prog").replace("%",""));
  //   pourcentage += 5;
  //   bp!.setAttribute("data-prog", pourcentage + "%");
  //   if (pourcentage >= 100){
  //     clearInterval(this.timer);
  //   }
  // }, 1000);

  ngOnInit() {
  }

}
