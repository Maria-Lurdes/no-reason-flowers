import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlowersDashboardRoutingModule} from "./flowers-dashboard-routing.module";
import {FlowersListComponent} from "./flowers-list/flowers-list.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [FlowersListComponent],
  imports: [
    CommonModule,
    FlowersDashboardRoutingModule,
    MatProgressBarModule
  ],
})
export class FlowersDashboardModule {
}
