import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlowersDashboardRoutingModule} from "./flowers-dashboard-routing.module";
import {FlowersListComponent} from "./flowers-list/flowers-list.component";

@NgModule({
  declarations: [FlowersListComponent],
  imports: [
    CommonModule,
    FlowersDashboardRoutingModule
  ],
})
export class FlowersDashboardModule {
}
