import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AlertController } from "@ionic/angular";

import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { Validators } from "@angular/forms";
import firebase from "firebase/compat";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // user = {
  //   email: '',
  //   password: '',
  //   pseudo: ''
  // }
  form_Validator: FormGroup;

  constructor(public ngFireAuth: AngularFireAuth,
              private alertController: AlertController,
              public form_builder: FormBuilder,
              public router: Router) {
    this.form_Validator = new FormGroup<any>({
      email: new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      pwd: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  ngOnInit(): void {}

   onSubmit(){
    if (this.form_Validator.valid) {
      const form_Values = this.form_Validator.value;
      this.ngFireAuth.signInWithEmailAndPassword(form_Values.email, form_Values.pwd)
        .then((form_Values) => {
          alert("Vous avez été identifié !");
          this.router.navigate(['menu'])
        })
        .catch((error) => {
          alert("Vos informations sont érronés, veuillez ressayer");
        });
    }
  }
}
