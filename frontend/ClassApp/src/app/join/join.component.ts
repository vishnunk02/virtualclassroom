import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MediatorserviceService } from '../mediatorservice.service';
import { Router } from '@angular/router';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  @Output() newEvent = new EventEmitter
  form1 = new FormGroup({
    'course_key': new FormControl
  })
  getKey() {
    this.service.getCourse(this.form1.value).then(res => res.json()).then(data => {
      console.log(data);
      this.share.setCourseData(data)
      this.router.navigate(['classdata/'])
    })

  }
  constructor(public service: MediatorserviceService, public router: Router, public share:DatashareService) { }
}
