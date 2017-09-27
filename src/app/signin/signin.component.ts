import {Component, OnInit} from '@angular/core';
import {TrackingTimeService} from "../tracking-time.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.styl']
})
export class SigningComponent implements OnInit {
  signin = false;
  email = '';
  password = '';

  constructor(private service: TrackingTimeService) {
  }

  ngOnInit() {

  }


  signing() {
    this.service.account = `${this.email}:${this.password}`;
    this.service.getAllUsers()
      .subscribe(user => {
        this.signin = true;
        this.service.user = user;
        user.data.map(it=>{return it.id});
        user.data.forEach(user => {
          this.service.getEvents(user.id).subscribe(event => {
              this.service.event.concat(event)
            }
          ).unsubscribe();
        })
      }, error => {
        console.error(error);
      }).unsubscribe();
  }
}
