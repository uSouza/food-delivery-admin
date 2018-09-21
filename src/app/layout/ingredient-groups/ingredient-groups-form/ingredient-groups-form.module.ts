import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { IngredientGroupsFormRoutingModule } from './ingredient-groups-form-routing.module';
import { IngredientGroupsFormComponent } from './ingredient-groups-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IngredientGroupsFormRoutingModule,
        NgbAlertModule.forRoot(),
        NgxPaginationModule
        ],
    declarations: [IngredientGroupsFormComponent]
})
export class IngredientGroupsFormModule {}
