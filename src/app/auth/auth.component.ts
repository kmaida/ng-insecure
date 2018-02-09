import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [`
  img {
    border-radius: 100px;
    width: 30px;
  }
  .active { font-weight: 800; }
  `]
})
export class AuthComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
