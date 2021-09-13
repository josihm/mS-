import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSscRoutingModule } from './lista-ssc-routing.module';
import { ListaSscComponent } from './lista-ssc.component';


@NgModule({
  declarations: [ListaSscComponent],
  imports: [
    CommonModule,
    ListaSscRoutingModule
  ]
})
export class ListaSscModule { }
