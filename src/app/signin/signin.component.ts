import {Component, OnInit} from '@angular/core';
import {TrackingTimeService} from "../tracking-time.service";
import {User} from "../interface/User";
import {Event} from "../interface/Event";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.styl']
})
export class SigningComponent implements OnInit {
  users: User.user;
  signin = false;
  email = '';
  password = '';

  constructor(private service: TrackingTimeService) {
  }

  ngOnInit() {

  }


  signing() {
    this.service.account = `${this.email}:${this.password}`;
    this.service.getAllUsers().subscribe((user: User.user) => {
      this.users = user;
      this.signin = true;
      this.service.user = user;
      this.service.getEvents(this.users.data[0].id).subscribe((event: Event.event) => {
        this.service.event = event;
      })
    }, error => {
      console.error(error);
    });

  }
}
