import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MenusService } from '../../../services/menus/menus.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-menus-show',
    templateUrl: './menus-show.component.html',
    styleUrls: ['./menus-show.component.scss']
})
export class MenusShowComponent implements OnInit {

    menu: any;
    public alerts: Array<any> = [];

    constructor(public route: ActivatedRoute,
        private router: Router,
        private menusService: MenusService,
        private modalService: NgbModal) { }

    ngOnInit() {
        if (localStorage.getItem('access_token') != null) {
            this.getMenu();
        } else {
            this.router.navigate(['/login']);
        }
    }

    getMenu() {
        console.log(this.route.snapshot.paramMap.get('id'));
        this.menusService
            .getMenu(localStorage.getItem('access_token'), this.route.snapshot.paramMap.get('id'))
            .subscribe(
                menu => {
                    this.setMenu(menu)
                }
            )
    }

    setMenu(menu) {
        console.log(menu);
        this.menu = menu;
    }

    edit() {
        localStorage.setItem('menu_edit', JSON.stringify(this.menu));
        this.router.navigate(['/menus-form', { id: this.menu.id }])
    }

    delete(content) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result == 'delete') {
                    this.menusService
                        .deleteMenu(localStorage.getItem('access_token'), this.menu.id)
                        .subscribe(
                            menu => { this.router.navigate(['/menus-list', { message: 'Menu deletado com sucesso!' }]) },
                            err => { this.showAlert('danger', err) }
                        )
                }
            });
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
