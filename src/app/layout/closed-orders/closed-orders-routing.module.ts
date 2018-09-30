import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClosedOrdersComponent } from './closed-orders.component';

const routes: Routes = [
    {
        path: '',
        component: ClosedOrdersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClosedOrdersRoutingModule {}
