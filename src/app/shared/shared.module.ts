import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FilterPipe} from './filter.pipe';
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule, FilterPipe, MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatSnackBarModule, MatIconModule, MatBadgeModule],
  declarations: [FilterPipe]
})
export class SharedModule {

}
