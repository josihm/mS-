import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SstRoutingModule } from './sst-routing.module';
import { SstComponent } from './sst.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from '../../header/material/mat.module';


@NgModule({
  declarations: [SstComponent],
  imports: [
    CommonModule,
    SstRoutingModule, ReactiveFormsModule, MatModule, FormsModule
  ]
})
export class SstModule { }
