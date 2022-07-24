import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DetailsCardComponent } from './components/details-card/details-card.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {StoreModule} from "@ngrx/store";
import {cartReducer, metaReducerLocalStorage} from "./card-state-store/cart.reducer";
import {MatBadgeModule} from "@angular/material/badge";
@NgModule({
  declarations: [AppComponent, HeaderComponent, DetailsCardComponent, ShoppingCartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    StoreModule.forRoot({cartEntries: cartReducer}, {metaReducers: [metaReducerLocalStorage]}),
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
