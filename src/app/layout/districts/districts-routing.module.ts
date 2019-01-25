import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictsComponent } from './districts.component';

const routes: Routes = [
    {
        path: '',
        component: DistrictsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DistrictsRoutingModule {}
