import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FilterPipe} from './filter.pipe';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [HttpClientModule, MatIconModule],
  exports: [HttpClientModule, FilterPipe],
  declarations: [FilterPipe]
})
export class SharedModule {

}
