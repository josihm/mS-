import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSstComponent } from './lista-sst.component';

const routes: Routes = [{ path: '', component: ListaSstComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaSstRoutingModule { }
