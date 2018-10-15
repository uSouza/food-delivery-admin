import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsFormComponent } from './restaurants-form.component';

const routes: Routes = [
    {
        path: '',
        component: RestaurantsFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestaurantsFormRoutingModule {}
