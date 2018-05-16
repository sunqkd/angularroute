import { Stock } from "../stock/stock.component";
import { Router, Resolve,ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { Injectable } from "@angular/core"; 

@Injectable()
export class StockResolve implements Resolve<Stock> {


    constructor(private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Stock | Observable<Stock> | Promise<Stock> {
       let id = route.params["id"]; // 路由参数
       
       if(id == 1){
            return new Stock(1,"IBM");
       }else{
            this.router.navigate(['/Home']);
            return undefined;
       }
    }

}