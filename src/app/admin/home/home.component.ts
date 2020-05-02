import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('drawer') el: MatDrawer;
  constructor(private auth_service: AuthService, private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.el.open();
    }, 0);
  }

  signOut() {
    this.auth_service.signOut().subscribe(res => {
      this.auth_service.removeToken();
      this.router.navigate(["/login"])
    }, err => {
        console.log(err)
    });
    
  }
}
