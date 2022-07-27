import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {StoreModule} from "@ngrx/store";
import {cartReducer, metaReducerLocalStorage} from "./store/cart.reducer";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, ShoppingCartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({cartEntries: cartReducer}, {metaReducers: [metaReducerLocalStorage]})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
