import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [ // 路由配置
    {path: '' , component:HomeComponent},
    // {path: 'stock', component:StockComponent},  // 第一种路由传参
    // {path: 'stock/:id', component:StockComponent, data:[{isPro: true}]}, // 第二种路由传参

    {path: 'stock/:id', component:StockComponent, data:[{isPro: true}]}, // 第三种
    {path: '**',component:Code404Component} // 放在最后面
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
