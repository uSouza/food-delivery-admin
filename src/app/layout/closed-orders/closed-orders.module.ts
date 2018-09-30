import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClosedOrdersRoutingModule } from './closed-orders-routing.module';
import { ClosedOrdersComponent } from './closed-orders.component';
import {NgxMaskModule} from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import {DatePipe} from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        ClosedOrdersRoutingModule,
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        NgxPaginationModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [ClosedOrdersComponent],
    providers: [DatePipe],
})
export class ClosedOrdersModule {}
