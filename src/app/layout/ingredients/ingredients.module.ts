import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IngredientsRoutingModule,
        NgbAlertModule.forRoot(),
        NgxPaginationModule
        ],
    declarations: [IngredientsComponent]
})
export class IngredientsModule {}
