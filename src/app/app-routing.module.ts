import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PS4Component } from './pages/ps4/ps4.component';


const routes: Routes = [
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'about', component: AboutComponent},
  {path: 'PC', component: ItemComponent},
  {path: 'PS4', component: PS4Component},
  {path: '**', pathMatch: 'full', redirectTo: 'catalogo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
