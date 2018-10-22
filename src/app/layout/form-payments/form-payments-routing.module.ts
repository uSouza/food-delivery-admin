import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPaymentsComponent } from './form-payments.component';

const routes: Routes = [
    {
        path: '',
        component: FormPaymentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormPaymentsRoutingModule {}
