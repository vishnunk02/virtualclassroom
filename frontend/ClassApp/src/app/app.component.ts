import { Component, OnInit } from '@angular/core';
import { MediatorserviceService } from './mediatorservice.service';
import { Router } from '@angular/router';
import { DatashareService } from './datashare.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'ClassApp';
  user: any
  ngOnInit(): void {

    if (this.isUserLoggedIn()) {
      this.service.userData()
        .then(res => res.json())
        .then(data => {
            this.user = data;
        });
    }
  }

  constructor(public router: Router, public service: MediatorserviceService, public share: DatashareService) { }

  logOut() {
    localStorage.removeItem('token');
    window.location.reload()
    this.router.navigate(['login/']);
  }

  fetchToken() {
    let token = localStorage.getItem('token');
    return token
  }

  isUserLoggedIn() {
    return !!this.fetchToken();
  }


}



