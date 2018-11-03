import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderDetailsComponent } from './order-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        OrderDetailsRoutingModule,
        ClipboardModule
        ],
    declarations: [OrderDetailsComponent]
})
export class OrderDetailsModule {}
