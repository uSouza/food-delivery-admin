import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreightsComponent } from './freights.component';

const routes: Routes = [
    {
        path: '',
        component: FreightsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FreightsRoutingModule {}
