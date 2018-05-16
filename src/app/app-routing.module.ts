import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ConsultComponent } from './consult/consult.component';
import { PermissionGuard } from './guard/permission.guard';
import { FocusGuard } from './guard/focus.guard';
import { StockResolve } from './guard/stock.resolve';


const routes: Routes = [ // 路由配置
	{path: '' , redirectTo: '/Home', pathMatch: 'full'}, // 路由重定向 
	// {path: 'xx' , redirectTo: '/Home', pathMatch: 'prefix'}, // 路由重定向xx   localhost:4200/xx
    {path: 'Home' , component:HomeComponent},
    // {path: 'stock', component:StockComponent},  // 第一种路由传参
    // {path: 'stock/:id', component:StockComponent}, // 第二种路由传参

	{path: 'stock/:id', component:StockComponent, data:[{isPro: true}], children:[ // 子路由
		
		{path: '' , component:SellerListComponent},
		{path: 'buyer/:id' , component:BuyerListComponent}
		
    ],

    // canActivate: [PermissionGuard],
    // canDeactivate: [FocusGuard]
    resolve: {
        stock:StockResolve
    }

    }, // 第三种


	{path: 'consult' ,component:ConsultComponent, outlet: 'aux'},

    {path: '**',component:Code404Component} // 放在最后面
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
