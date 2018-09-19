import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderDetailsComponent } from './order-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        OrderDetailsRoutingModule,
        ],
    declarations: [OrderDetailsComponent]
})
export class OrderDetailsModule {}
