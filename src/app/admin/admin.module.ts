import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../shared/module/material/material.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [HomeComponent, UsersComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
