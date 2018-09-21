import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NgxPaginationModule,
        StatModule,
        NgbAlertModule.forRoot(),
    ],
    declarations: [
        DashboardComponent,
    ]
})
export class DashboardModule {}
