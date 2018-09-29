import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenusService } from '../../../services/menus/menus.service';

@Component({
  selector: 'app-menus-list',
  templateUrl: './menus-list.component.html',
  styleUrls: ['./menus-list.component.scss']
})
export class MenusListComponent implements OnInit {

    menus: any[];
    page: number = 1;
    public alerts: Array<any> = [];

    constructor(public router: Router,
                public route: ActivatedRoute,
                private menusService: MenusService) { }

    ngOnInit() {
        if (this.route.snapshot.paramMap.get('message') != null) {
            this.showAlert('success', this.route.snapshot.paramMap.get('message'));
        }
        if (localStorage.getItem('access_token') == null) {
            this.router.navigate(['/login']);
        }
        this.getMenus();
    }

    getMenus() {
        this.menusService
            .getMenus(localStorage.getItem('access_token'))
            .subscribe(
                menus => {
                    this.menus = menus
                }
            )
    }

    showMenu(menu: any) {
        this.router.navigate(['/menus-show', { id: menu.id }]);
    }

    showAlert(type, err) {
        this.alerts.push(
            {
                id: 1,
                type: type,
                message: err
            }
        )
    }

    closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

}
