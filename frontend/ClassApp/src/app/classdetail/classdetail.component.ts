import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { MediatorserviceService } from '../mediatorservice.service';

@Component({
  selector: 'app-classdetail',
  templateUrl: './classdetail.component.html',
  styleUrls: ['./classdetail.component.css']
})
export class ClassdetailComponent {
  active = 1;
  variable:any = 'stream'
  streamCLick(data:any){
    this.variable = data
  }
  user:any
  classdata:any
  ngOnInit() {
    this.classdata = this.share.getClassData()
    this.service.userData().then(response => response.json())
      .then(data => {
        this.user = data;
      })
  }    
  constructor(public share:DatashareService,public service:MediatorserviceService) {}
}
