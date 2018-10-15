import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { RestaurantsListRoutingModule } from './restaurants-list-routing.module';
import { RestaurantsListComponent } from './restaurants-list.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatePipe } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        RestaurantsListRoutingModule,
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        NgxPaginationModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [RestaurantsListComponent],
    providers: [DatePipe],
})
export class RestaurantsListModule {}
