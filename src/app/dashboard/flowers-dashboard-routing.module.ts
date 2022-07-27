import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlowersListComponent} from "./flowers-list/flowers-list.component";

const routes: Routes = [
  {path: '', component: FlowersListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowersDashboardRoutingModule {
}
