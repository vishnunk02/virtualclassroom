import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClassComponent } from './class/class.component';
import { RegisterComponent } from './register/register.component';
import { JoinComponent } from './join/join.component';
import { ClassshowComponent } from './classshow/classshow.component';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { CreateclassComponent } from './createclass/createclass.component';
import { ClassdetailComponent } from './classdetail/classdetail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'class', component: ClassComponent },
  { path: 'enrolled', component: EnrolledComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'join', component: JoinComponent },
  { path: 'classdata', component: ClassshowComponent },
  { path: 'createclass', component: CreateclassComponent },
  { path: 'classdetail', component: ClassdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
