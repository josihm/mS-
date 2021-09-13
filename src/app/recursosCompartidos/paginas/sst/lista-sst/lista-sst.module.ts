import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSstRoutingModule } from './lista-sst-routing.module';
import { ListaSstComponent } from './lista-sst.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/recursosCompartidos/header/material/mat.module';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [ListaSstComponent],
  imports: [
    CommonModule,
    ListaSstRoutingModule,
    ReactiveFormsModule, 
    FormsModule, MatModule,
    MatSliderModule
  ]
})
export class ListaSstModule { }
