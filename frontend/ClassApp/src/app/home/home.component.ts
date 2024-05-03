import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { MediatorserviceService } from '../mediatorservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;

  ngOnInit(): void {
    this.service.userData().then(response => response.json())
      .then(data => {
        this.user = data;
      })
  }

  constructor(public share: DatashareService, public service: MediatorserviceService) {}
}

