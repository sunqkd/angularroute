import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ConsultComponent } from './consult/consult.component';
import { PermissionGuard } from './guard/permission.guard';
import { FocusGuard } from './guard/focus.guard';
import { StockResolve } from './guard/stock.resolve';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    HomeComponent,
    Code404Component,
    BuyerListComponent,
    SellerListComponent,
    ConsultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PermissionGuard,FocusGuard,StockResolve], // 暂时实例化
  bootstrap: [AppComponent]
})
export class AppModule { }
