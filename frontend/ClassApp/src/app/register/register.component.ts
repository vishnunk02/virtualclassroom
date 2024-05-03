import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MediatorserviceService } from '../mediatorservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form1=new FormGroup({
    'first_name' : new FormControl,
    'last_name' : new FormControl,
    'email' : new FormControl,
    'username' : new FormControl,
    'password' : new FormControl,

  })

  registerUser(){
    this.service.createUser(this.form1.value).then(res=>res.json()).then(data=>{
      console.log(data);
  })
  this.router.navigate(['login/'])
}
  constructor(public service:MediatorserviceService,public router:Router) {}
}
