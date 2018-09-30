import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenusListRoutingModule } from './menus-list-routing.module';
import { MenusListComponent } from './menus-list.component';
import {NgxMaskModule} from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import {DatePipe} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        MenusListRoutingModule,
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        NgxPaginationModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [MenusListComponent],
    providers: [DatePipe],
})
export class MenusListModule {}
