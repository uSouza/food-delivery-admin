import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { RestaurantsFormRoutingModule } from './restaurants-form-routing.module';
import { RestaurantsFormComponent } from './restaurants-form.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatePipe } from '@angular/common';
import { CurrencyMaskModule } from "ng2-currency-mask";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        RestaurantsFormRoutingModule,
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        NgxPaginationModule,
        CurrencyMaskModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [RestaurantsFormComponent],
    providers: [DatePipe],
})
export class RestaurantsFormModule {}
