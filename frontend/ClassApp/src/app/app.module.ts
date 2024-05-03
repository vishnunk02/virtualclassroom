import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ClassComponent } from './class/class.component';
import { RegisterComponent } from './register/register.component';
import { JoinComponent } from './join/join.component';
import { ClassshowComponent } from './classshow/classshow.component';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { CreateclassComponent } from './createclass/createclass.component';
import { ClassdetailComponent } from './classdetail/classdetail.component';
import { StreamComponent } from './stream/stream.component';
import { PeopleComponent } from './people/people.component';
import { ClassworkComponent } from './classwork/classwork.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClassComponent,
    RegisterComponent,
    JoinComponent,
    ClassshowComponent,
    EnrolledComponent,
    CreateclassComponent,
    ClassdetailComponent,
    StreamComponent,
    PeopleComponent,
    ClassworkComponent,
    AssignmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
