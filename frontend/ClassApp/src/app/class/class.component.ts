import { Component, OnInit } from '@angular/core';
import { MediatorserviceService } from '../mediatorservice.service';
import { DatashareService } from '../datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  classdata: any
  ngOnInit() {
    this.service.getClassList().then(res => res.json()).then(data => this.classdata = data)
  }
  getClassUn(id: any): void {
    this.service.retrieveClass(id).then(response => response.json()).then(data => {
      this.share.setClassData(data);
      this.router.navigate(['classdetail/']);
    }).catch(error => console.error('Error retrieving class data:', error));
  }
  delete: any
  deleteClass(id: any) {
    this.service.dClass(id).then(res => res.json()).then(data => this.delete = data)
    window.location.reload();
  }


  images: string[] = [
    "https://img.freepik.com/free-photo/light-blue-frame-with-office-supplies_23-2148224261.jpg",
    "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNDctYmFpZmVybm4tMDcuanBn.jpg",
    "https://img.freepik.com/free-vector/science-objects-icons-seamless-pattern_1308-134774.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais"
  ]
  num: number = Math.floor(Math.random() * 3);

  index: number [] = [0,1,2,3,4]
  constructor(public service: MediatorserviceService, public share: DatashareService, public router: Router) { }
  

}
