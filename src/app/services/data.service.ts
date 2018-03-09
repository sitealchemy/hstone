import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  private apiUrl = "https://jsonplaceholder.typicode.com";

  constructor(private http: Http) { }

  getMessages() : Observable<Message[]> {
    return this.http.get(this.apiUrl + '/posts')
    .map((res) => res.json())
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  getDetails(id: number) : Observable<Message> {
    return this.http.get(this.apiUrl + '/posts/' + id)
    .map((res) => res.json())
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }

}
