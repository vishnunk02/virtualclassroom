import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  private storageKey1 = 'courseData';
  private storageKey2 = 'classData';
  private storageKey3 = 'userData';

  setCourseData(data: any) {
    localStorage.setItem(this.storageKey1, JSON.stringify(data));
  }

  getCourseData() {
    const storedData1 = localStorage.getItem(this.storageKey1);
    return storedData1 ? JSON.parse(storedData1) : null;
  }

  setClassData(data: any) {
    localStorage.setItem(this.storageKey2, JSON.stringify(data));
  }

  getClassData() {
    const storedData2 = localStorage.getItem(this.storageKey2);
    return storedData2 ? JSON.parse(storedData2) : null;
  }

  setUData(data: any) {
    localStorage.setItem(this.storageKey3, JSON.stringify(data));
  }

  getUData() {
    const storedData3 = localStorage.getItem(this.storageKey3);
    return storedData3 ? JSON.parse(storedData3) : null;
  }
}
