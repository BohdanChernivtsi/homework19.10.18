import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
    getListItems() {
      return this.http
      .get('https://api.github.com/users')
  }
  getListItems2() {
    return this.http
    .get('https://jsonplaceholder.typicode.com/users')
}
getUser(userId) {
  return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
}
}
