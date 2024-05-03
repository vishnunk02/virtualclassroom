import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { MediatorserviceService } from '../mediatorservice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
  classdata: any
  material: any
  user: any
  file: File | null = null;
  title: string = '';
  ngOnInit() {
    this.service.userData().then(res => res.json()).then(data => {this.user = data;});
    this.classdata = this.share.getClassData()
    this.service.listMaterial(this.classdata.id).then(res => res.json()).then(data => this.material = data)

  }
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile(id: any) {
    if (!this.file) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('material', this.file);
    formData.append('title', this.title);

    const headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token') || '');

    fetch(`http://127.0.0.1:8000/class/${id}/add_material/`, {
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
        window.location.reload();
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
  }

  form1 = new FormGroup({
    'title': new FormControl,
    'due_date': new FormControl,
  })

  reply: any
  addquestion(id: any) {
    this.service.addQuest(this.form1.value, id).then(res => res.json()).then(data => this.reply = data)
  }





  constructor(public share: DatashareService, public service: MediatorserviceService) { }
}
