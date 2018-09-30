import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdditionalsRoutingModule } from './additionals-routing.module';
import { AdditionalsComponent } from './additionals.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdditionalsRoutingModule,
        NgbAlertModule.forRoot(),
        CurrencyMaskModule,
        NgxPaginationModule
        ],
    declarations: [AdditionalsComponent]
})
export class AdditionalsModule {}
