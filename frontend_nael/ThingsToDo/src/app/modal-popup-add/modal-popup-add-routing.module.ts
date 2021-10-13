import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPopupAddPage } from './modal-popup-add.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPopupAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPopupAddPageRoutingModule {}
