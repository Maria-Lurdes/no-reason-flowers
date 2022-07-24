import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlowersDashboardRoutingModule} from "./flowers-dashboard-routing.module";
import {FlowersListComponent} from "./flowers-list/flowers-list.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FlowerCardComponent} from "../components/flower-card/flower-card.component";
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [FlowersListComponent, FlowerCardComponent],
  imports: [
    CommonModule,
    FlowersDashboardRoutingModule,
    MatProgressBarModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
})
export class FlowersDashboardModule {
}
