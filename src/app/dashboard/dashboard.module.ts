import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {FlowersListComponent} from "./flowers-list/flowers-list.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FlowerCardComponent} from "./flower-card/flower-card.component";
import {SharedModule} from "../shared/shared.module";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FlowersWallpaperComponent} from './flowers-wallpaper/flowers-wallpaper.component';
import {DashboardComponent} from "./dashboard.component";
import {DetailsCardComponent} from "./details-card/details-card.component";

@NgModule({
  declarations: [FlowersListComponent, FlowerCardComponent, FlowersWallpaperComponent, DashboardComponent, DetailsCardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatProgressBarModule,
    SharedModule,
    MatSelectModule,
    MatPaginatorModule,
  ],
})
export class DashboardModule {
}
