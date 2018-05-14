import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from  '@angular/router';
@Component({
	selector: 'app-buyer-list',
	templateUrl: './buyer-list.component.html',
	styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {

	private buyerId: number;

	constructor(private routeInfo: ActivatedRoute) { }  // 可以拿到路由参数

	ngOnInit() {
		this.buyerId = this.routeInfo.snapshot.params["id"];
	}

}
