import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionalsComponent } from './additionals.component';

const routes: Routes = [
    {
        path: '',
        component: AdditionalsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdditionalsRoutingModule {}
