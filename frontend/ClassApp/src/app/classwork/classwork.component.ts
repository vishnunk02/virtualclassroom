import { Component, OnInit } from '@angular/core';
import { MediatorserviceService } from '../mediatorservice.service';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-classwork',
  templateUrl: './classwork.component.html',
  styleUrls: ['./classwork.component.css']
})
export class ClassworkComponent implements OnInit {
  work: any;
  classdata: any;
  assignment: File | null = null;
  title: string = '';

  constructor(public service: MediatorserviceService, public share: DatashareService) { }

  isCollapsed = false;
  ngOnInit() {
    this.classdata = this.share.getClassData();
    const id = this.classdata.id;


    this.service.listQuestion(id)
      .then(res => res.json())
      .then(data => {
        this.work = data;
        console.log(this.work);
      });
  }
  answer:any
  loadAnswer(id: any) {
    this.service.listOneAnswer(id)
      .then(res => res.json())
      .then(data => {
        this.answer = data;
        console.log(this.answer);
      });
  }

  onFileSelected(event: any) {
    this.assignment = event.target.files[0];
  }

  uploadFile(id: any) {
    if (!this.assignment) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('assignment', this.assignment);
    formData.append('title', this.title);

    const headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token') || '');

    fetch(`http://127.0.0.1:8000/answer/${id}/add_answer/`, {
      method: 'POST',
      body: formData,
      headers: headers
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to upload file');
        }
        return response.json();
      })
      .then(data => {
        console.log('File uploaded successfully:', data);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
  }
}
