

import { ChequeShowComponent } from './cheque-show/cheque-show.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [NavComponent,ChequeShowComponent],
  imports: [
    CommonModule
  ],
  exports: [NavComponent,ChequeShowComponent]
})
export class SharedModule { }
