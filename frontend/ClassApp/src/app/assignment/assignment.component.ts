import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { MediatorserviceService } from '../mediatorservice.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  classdata: any;
  assignment: any;

  ngOnInit(): void {
    this.classdata = this.share.getClassData();
    this.service.listAllAnswer(this.classdata.id)
      .then(res => res.json())
      .then(data => {
        this.assignment = data;
        console.log(this.assignment);
      });

  }


  constructor(public share: DatashareService, public service: MediatorserviceService) { }
}
