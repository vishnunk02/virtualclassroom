import { Component, OnInit } from '@angular/core';
import { MediatorserviceService } from '../mediatorservice.service';
import { DatashareService } from '../datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classshow',
  templateUrl: './classshow.component.html',
  styleUrls: ['./classshow.component.css']
})
export class ClassshowComponent implements OnInit {
  classdata:any
  ngOnInit() {
    this.classdata = this.share.getCourseData()
  }
  join:any
  joinClass(id:any){
    this.service.joinClass(id).then(res=>res.json()).then(data=>this.join=data)
    this.route.navigate(['class/'])

  }
  constructor(public service:MediatorserviceService,public share:DatashareService,public route:Router) {}
}
