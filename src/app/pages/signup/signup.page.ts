import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AlertController } from "@ionic/angular";

import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { Validators } from "@angular/forms";

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  form_Validator: FormGroup;

  constructor(public ngFireAuth: AngularFireAuth,
              private alertController: AlertController,
              public form_builder: FormBuilder,
              public router: Router) {
    this.form_Validator = new FormGroup<any>({
      pseudo: new FormControl('', Validators.required),
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

  ngOnInit() {
  }

  onSubmit(){
    if (this.form_Validator.valid) {
      const form_Values = this.form_Validator.value;
      this.ngFireAuth.createUserWithEmailAndPassword(form_Values.email, form_Values.pwd)
        .then((form_Values) => {
          alert("Vous etes enregistré !");
          this.router.navigate(['menu'])
        })
        .catch((error) => {
          alert("Cette adresse e-mail est déjà enregistré, veuillez en choisir une autre");
        });
    }
  }
}
