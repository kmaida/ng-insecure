import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
  <div class="text-center">
    <img src="/assets/images/loading.svg" alt="Loading...">
  </div>
  `,
  styles: [`
    div { padding: 1rem 0; }
    img {
      display: inline-block;
      height: 80px;
      width: 80px;
    }
  `]
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
