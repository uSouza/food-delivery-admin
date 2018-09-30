import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusFormComponent } from './menus-form.component';

const routes: Routes = [
    {
        path: '',
        component: MenusFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenusFormRoutingModule {}
