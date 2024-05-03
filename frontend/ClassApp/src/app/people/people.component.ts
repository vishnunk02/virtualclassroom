import { Component, OnInit } from '@angular/core';
import { MediatorserviceService } from '../mediatorservice.service';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: any;
  classdata:any
  ngOnInit() {
    this.classdata = this.share.getClassData()
    const id = this.classdata.id
    this.service.listStudent(id)
      .then(res => res.json())
      .then(data => this.people = data);
  }
  constructor(public service: MediatorserviceService,public share:DatashareService) {
  }

  getId(id:any){

  }
}
