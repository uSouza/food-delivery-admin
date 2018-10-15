import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { RestaurantsShowRoutingModule } from './restaurants-show-routing.module';
import { RestaurantsShowComponent } from './restaurants-show.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatePipe } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        RestaurantsShowRoutingModule,
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        NgxPaginationModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [RestaurantsShowComponent],
    providers: [DatePipe],
})
export class RestaurantsShowModule {}
