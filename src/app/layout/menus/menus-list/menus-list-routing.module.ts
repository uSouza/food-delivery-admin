import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusListComponent } from './menus-list.component';

const routes: Routes = [
    {
        path: '',
        component: MenusListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenusListRoutingModule {}
