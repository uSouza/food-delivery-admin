import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenusShowRoutingModule } from './menus-show-routing.module';
import { MenusShowComponent } from './menus-show.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatePipe } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        MenusShowRoutingModule,
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        NgxPaginationModule,
        ClipboardModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [MenusShowComponent],
    providers: [DatePipe],
})
export class MenusShowModule { }
