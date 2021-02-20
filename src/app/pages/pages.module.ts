import { NavComponent } from './../shared/nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';


@NgModule({

  declarations: [HomeComponent,AddComponent,ListComponent],
  imports: [CommonModule, PagesRoutingModule,SharedModule,ReactiveFormsModule!,FormsModule],
})
export class PagesModule {}
