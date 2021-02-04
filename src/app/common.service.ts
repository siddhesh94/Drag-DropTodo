import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getTodoData(){
    return this.http.get('http://localhost:3000/todo')
  }

  getWorkInProgressData(){
    return this.http.get('http://localhost:3000/workInProgress')
  }

  getCompletedData(){
    return this.http.get('http://localhost:3000/Completed')
  }
}
