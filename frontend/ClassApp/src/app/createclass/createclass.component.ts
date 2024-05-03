import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MediatorserviceService } from '../mediatorservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createclass',
  templateUrl: './createclass.component.html',
  styleUrls: ['./createclass.component.css']
})
export class CreateclassComponent {
  message:any
  form1=new FormGroup({
    'title' : new FormControl,
    'description' : new FormControl,

  })
  getUserData(){
    this.service.createClass(this.form1.value).then(res=>res.json()).then(data=>{
      console.log(data);
    })
    this.router.navigate(['class/'])
    
  }
  constructor(public service:MediatorserviceService,public router:Router){}
}
