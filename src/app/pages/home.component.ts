import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template: `
  <app-auth></app-auth>
  <h1 class="text-center">Welcome</h1>
  <p class="lead container">Hello there! Welcome to our fun app.</p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Home');
  }

}
