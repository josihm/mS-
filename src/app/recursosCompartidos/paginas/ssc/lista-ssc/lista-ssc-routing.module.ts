import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSscComponent } from './lista-ssc.component';

const routes: Routes = [{ path: '', component: ListaSscComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaSscRoutingModule { }
