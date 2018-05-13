import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {


	private stockId:number;
	private isPro:boolean;

	constructor(private routerInfo: ActivatedRoute) { }

/**
 *  同一个组件路由到自身 ngOnInit（）不会被执行 解决方法 参数订阅
 */
	ngOnInit() {  
		// this.stockId = this.routerInfo.snapshot.queryParams["id"]; // 第一种 获得路由传值

		

		// this.stockId = this.routerInfo.snapshot.params["id"];  // 第二种 获得路由传值
		
		this.routerInfo.params.subscribe((params:Params) => this.stockId = params["id"]) // 监听路由跳转

		this.isPro = this.routerInfo.snapshot.data[0].isPro
	}

}
