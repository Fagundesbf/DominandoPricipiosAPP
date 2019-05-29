import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formularioLogin: FormGroup;

  email: FormControl;
  senha: FormControl;
  errorEmail: boolean;
  messageEmail: string;
  errorsenha: boolean;
  messagesenha: string;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   public navCtrl: NavController) {

  //   let emailRegular = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

  //   this.email = new FormControl("", Validators.compose([Validators.required, Validators.pattern(emailRegular)]))
  //   this.senha = new FormControl("", Validators.compose([Validators.required, Validators.minLength(5)]));


  //   this.formularioLogin = formBuilder.group({
  //     email: this.email,
  //     senha: this.senha
  //   });

  // }

  constructor(
    formBuilder: FormBuilder,
    public navCtrl: NavController) {
    let emailRegular = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    this.formularioLogin = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegular)])],
      senha: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])],
    });
  }

  onSubmited() {

    let { email, senha } = this.formularioLogin.controls;

    if (!this.formularioLogin.valid) {
      if (!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Ops! Email inválido";
      } else {
        this.messageEmail = "";
      }

      if (!senha.valid) {
        this.errorsenha = true;
        this.messagesenha = "A senha precisa ter de 6 a 20 caracteres"
      } else {
        this.messagesenha = "";
      }
    }
    else {
      alert("Login Realizado");
      console.log(this.formularioLogin.value)
    }
  }




  exibirRegistrar(): void {

    this.navCtrl.push(RegisterPage);
  }
}


