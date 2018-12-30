import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenusFormRoutingModule } from './menus-form-routing.module';
import { MenusFormComponent } from './menus-form.component';
import {NgxMaskModule} from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import {DatePipe} from '@angular/common';

import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatePTParserFormatter } from './../../../../environments/NgbDatePTParserFormatter';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n, I18n } from './../../../../environments/CustomDatepickerI18n';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        MenusFormRoutingModule,
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        NgxPaginationModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [MenusFormComponent],
    providers: [
        DatePipe,
        [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
        [{provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter}],
    ],
})
export class MenusFormModule {}
