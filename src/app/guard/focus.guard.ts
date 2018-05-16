import { CanDeactivate } from '@angular/router';
import { StockComponent } from '../stock/stock.component';


// 处理离开的情况 

export class FocusGuard implements CanDeactivate<StockComponent> {
    canDeactivate(component: StockComponent) {
        if( component.isFocus() ){
            return true;
        }else{
            return window.confirm("不关注就离开吗？");
        }
    }
}