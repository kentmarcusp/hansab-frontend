import { Component } from '@angular/core';

@Component({
  selector: 'header-view',
  template: `
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        Bootstrap
      </a>
    </nav>
  `,
  styles: []
})

export class HeaderView {}
