import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { SizesRoutingModule } from './sizes-routing.module';
import { SizesComponent } from './sizes.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SizesRoutingModule,
        NgbAlertModule.forRoot(),
        CurrencyMaskModule,
        NgxPaginationModule
        ],
    declarations: [SizesComponent]
})
export class SizesModule {}
