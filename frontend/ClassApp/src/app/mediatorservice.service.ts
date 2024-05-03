import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediatorserviceService  {



  fetchToken() {
    return localStorage.getItem('token')
  }


  userData() {
    let header = new Headers()
    let token = this.fetchToken()
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'GET',
      headers: header
    }
    return fetch('http://127.0.0.1:8000/user/get_user/', options)
  }


  getToken(data: any) {
    let header = new Headers()
    header.append("Content-type", 'application/json')
    let raw = JSON.stringify(data)
    let options = {
      method: 'POST',
      body: raw,
      headers: header
    }
    return fetch('http://127.0.0.1:8000/token/', options)
  }
  getClassList() {
    let header = new Headers()
    let token = this.fetchToken()
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'GET',
      headers: header
    }
    return fetch('http://127.0.0.1:8000/class/', options)
  }

  getEnrolledList() {
    let header = new Headers()
    let token = this.fetchToken()
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'GET',
      headers: header
    }
    return fetch('http://127.0.0.1:8000/class/list_enrolled/', options)
  }

  getCourse(data: any) {
    let header = new Headers()
    let token = this.fetchToken()
    let raw = JSON.stringify(data)
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'POST',
      body: raw,
      headers: header,
    }
    return fetch('http://127.0.0.1:8000/class/get_course/', options)
  }

  createUser(data: any) {
    let header = new Headers()
    header.append("Content-type", 'application/json')
    let raw = JSON.stringify(data)
    let options = {
      method: 'POST',
      headers: header,
      body: raw
    }
    return fetch('http://127.0.0.1:8000/user/', options)
  }
  addAssgnm(data: any, id: any) {
    let header = new Headers();
    let token = this.fetchToken();

    if (token) {
      header.append('Authorization', token);
    }
    const file: File = data.assignment;
    const formData = new FormData();
    formData.append('assignment', file);
    formData.append('title', JSON.stringify(data.title.value));
    let options = {
      method: 'POST',
      headers: header,
      body: formData
    };

    return fetch(`http://127.0.0.1:8000/class/${id}/add_answer/`, options);
  }




  joinClass(id: any) {
    let header = new Headers()
    let token = this.fetchToken()
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'POST',
      headers: header,
    }
    return fetch(`http://127.0.0.1:8000/class/${id}/add_student/`, options)
  }

  retrieveClass(id: any) {
    let header = new Headers()
    let token = this.fetchToken()
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'GET',
      headers: header,
    }
    return fetch(`http://127.0.0.1:8000/class/${id}/`, options)
  }


  dClass(id: any) {
    let header = new Headers()
    let token = this.fetchToken()
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'GET',
      headers: header,
    }
    return fetch(`http://127.0.0.1:8000/class/${id}/delete_class/`, options)
  }

  listStudent(id: any) {
    let header = new Headers()
    let token = this.fetchToken()
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'GET',
      headers: header,
    }
    return fetch(`http://127.0.0.1:8000/class/${id}/list_stud`, options)
  }

  listQuestion(id: any) {
    let header = new Headers()
    let token = this.fetchToken()
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'GET',
      headers: header,
    }
    return fetch(`http://127.0.0.1:8000/class/${id}/list_question`, options)
  }

  listAllAnswer(id: any) {
    let header = new Headers()
    let token = this.fetchToken()
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'GET',
      headers: header,
    }
    return fetch(`http://127.0.0.1:8000/class/${id}/list_allanswer`, options)
  }

  listMaterial(id: any) {
    let header = new Headers()
    let token = this.fetchToken()
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'GET',
      headers: header,
    }
    return fetch(`http://127.0.0.1:8000/class/${id}/list_material/`, options)
  }

  listOneAnswer(id: any) {
    let header = new Headers()
    let token = this.fetchToken()
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'GET',
      headers: header,
    }
    return fetch(`http://127.0.0.1:8000/class/${id}/list_answer/`, options)
  }


  createClass(data: any) {
    let header = new Headers()
    let token = this.fetchToken()
    let raw = JSON.stringify(data)
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'POST',
      body: raw,
      headers: header,
    }
    return fetch(`http://127.0.0.1:8000/class/`, options)
  }

  addQuest(data: any,id:any) {
    let header = new Headers()
    let token = this.fetchToken()
    let raw = JSON.stringify(data)
    header.append("Content-type", 'application/json')
    if (token) {
      header.append('Authorization', token)
    }
    let options = {
      method: 'POST',
      body: raw,
      headers: header,
    }
    return fetch(`http://127.0.0.1:8000/class/${id}/add_question/`, options)
  }

  constructor() { }
}
