import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeStateTrigger, routeSlideStatetrigger } from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    routeFadeStateTrigger,
    routeSlideStatetrigger
  ]
})
export class UsersComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
