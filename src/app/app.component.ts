import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	constructor(private router: Router){

	}
	toStockDetail () {  
		// this.router.navigate(['/stock'])   // 主动路由跳转

		this.router.navigate(['/stock',2]) // 主动路由传参
	}
}
