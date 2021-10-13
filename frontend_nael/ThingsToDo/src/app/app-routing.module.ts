import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'modal-popup',
    loadChildren: () => import('./modal-popup/modal-popup.module').then( m => m.ModalPopupPageModule)
  },
  {
    path: 'modal-popup-add',
    loadChildren: () => import('./modal-popup-add/modal-popup-add.module').then( m => m.ModalPopupAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
