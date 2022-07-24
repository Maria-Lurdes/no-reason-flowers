import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";

const routes: Routes = [
  { path: 'shopping-card', component: ShoppingCartComponent},
  { path: '', redirectTo: 'flowers-dashboard', pathMatch: 'full' },
  { path: 'pets-dashboard', loadChildren: () => import('./flowers-dashboard/flowers-dashboard.module').then(m => m.FlowersDashboardModule)},
  { path: '**', loadChildren: () => import('./flowers-dashboard/flowers-dashboard.module').then(m => m.FlowersDashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
