import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusShowComponent } from './menus-show.component';

const routes: Routes = [
    {
        path: '',
        component: MenusShowComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenusShowRoutingModule {}
