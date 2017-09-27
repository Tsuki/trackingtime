import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as moment from "moment";
import {User} from "./interface/User";
import {Event} from "./interface/Event";

interface User {
}

@Injectable()
export class TrackingTimeService {
  private baseUrl: string = 'https://app.trackingtime.co/api/v2';
  private _account: string;
  private header = new HttpHeaders();
  user: User.user;
  event: Event.event[];

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get<User.user>(`${this.baseUrl}/users`, {headers: this.header});
  }

  getAllEvents() {
    this.user.data.forEach(data => {
      this.getEvents(data.id);
    })
  }

  getEvents(userId: number) {
    let lastmonth = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD');
    let yesterday = moment().format('YYYY-MM-DD');
    return this.http.get<Event.event>(`${this.baseUrl}/events?id=${userId}&from=${lastmonth}&to=${yesterday}&filter=USER`, {headers: this.header});
  }

  set account(value: string) {
    this._account = value;
    console.log(value);
    this.header = new HttpHeaders().set('Authorization', `Basic ${btoa(this._account)}`);
  }
}
