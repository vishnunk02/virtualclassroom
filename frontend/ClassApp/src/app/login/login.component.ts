import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MediatorserviceService } from '../mediatorservice.service';
import { Router } from '@angular/router';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: any
  form1 = new FormGroup({
    'username': new FormControl,
    'password': new FormControl,

  })
  user: any
  getUserData() {
    this.service.getToken(this.form1.value).then(res => res.json()).then(data => {
      console.log(data);
      let token = "Token " + data.token
      localStorage.setItem("token", token)
      if (data.token) {
        this.router.navigate(['home/'])
      }
      else {
        this.router.navigate(['login/'])
        this.message = "Invalid Username or password";
      }
    })
  }
  constructor(public service: MediatorserviceService, public router: Router, public share: DatashareService) { }
}
