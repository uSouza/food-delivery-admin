import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SizesComponent } from './sizes.component';

const routes: Routes = [
    {
        path: '',
        component: SizesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SizesRoutingModule {}
