import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('drawer') el: MatDrawer;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.el.open();
    }, 0);
  }
}
