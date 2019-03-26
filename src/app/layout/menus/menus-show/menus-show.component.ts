import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { MenusService } from '../../../services/menus/menus.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { IngredientGroupsService } from '../../../services/ingredient-groups/ingredient-groups.service';

@Component({
    selector: 'app-menus-show',
    templateUrl: './menus-show.component.html',
    styleUrls: ['./menus-show.component.scss']
})
export class MenusShowComponent implements OnInit {

    menu: any;
    ingredientGroups: any = null;
    public alerts: Array<any> = [];

    constructor(public route: ActivatedRoute,
        private router: Router,
        private _clipboardService: ClipboardService,
        public datepipe: DatePipe,
        private menusService: MenusService,
        private ingredientGroupService: IngredientGroupsService,
        private modalService: NgbModal) { }

    ngOnInit() {
        if (localStorage.getItem('access_token') != null) {
            this.getMenu();
            this.getIngredientsMenu();
        } else {
            this.router.navigate(['/login']);
        }
    }

    getIngredientsMenu() {
        this.ingredientGroupService
            .getIngredientesByMenu(localStorage.getItem('access_token'), this.route.snapshot.paramMap.get('id'))
            .subscribe(
                ingredient_groups => {
                    this.ingredientGroups = ingredient_groups;
                }
            );
    }

    getMenu() {
        this.menusService
            .getMenu(localStorage.getItem('access_token'), this.route.snapshot.paramMap.get('id'))
            .subscribe(
                menu => {
                    this.setMenu(menu);
                }
            );
    }

    setMenu(menu) {
        if (menu.date === '2000-01-01') {
            menu.date = Date.now();
        }
        this.menu = menu;
    }

    edit() {
        localStorage.setItem('menu_edit', JSON.stringify(this.menu));
        this.router.navigate(['/menus-form', { id: this.menu.id }]);
    }

    delete(content) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result === 'delete') {
                    this.menusService
                        .deleteMenu(localStorage.getItem('access_token'), this.menu.id)
                        .subscribe(
                            () => { this.router.navigate(['/menus-list', { message: 'Menu inativado com sucesso!' }]); },
                            err => { this.showAlert('danger', err) }
                        );
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
        );
    }

    closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    restoreMenu(menu) {
        this.menusService
            .restoreMenu(localStorage.getItem('access_token'), menu.id)
            .subscribe(
                () => this.router.navigate(['/menus-list', { message: 'Menu reativado com sucesso!' }])
            );
    }

    copyToClipboard() {
        this._clipboardService.copyFromContent(this.getMenuFormat());
    }

    getMenuFormat() {
        const header = '*RESTAURANTE ' + this.menu.company.fantasy_name.toUpperCase() + '*' + '\n\n' +
            '*Refeição do dia:* ' + this.datepipe.transform(this.menu.date, 'dd/MM/yyyy') + '\n';
        let ingredients = '\n*Ingredientes*\n';
        this.ingredientGroups.forEach(group => {
            ingredients += '*' + group.name + '*\n';
            group.ingredients.forEach(i => {
                ingredients += '- ' + i.name + '\n';
            });
        });
        let prices = '\n*Valores*\n';
        this.menu.prices.forEach(p => {
            prices += '- ' + p.size + ' R$ ' + p.price + '\n';
        });
        const finalText = '\n*Peça sua refeição por meio do site ou APP Pandeco* 🍝🍽' +
            '\n*Site:* pedido.pandeco.com.br\n*Google Play:* http://bit.do/pandeco';
        return header + ingredients + prices + finalText;

    }

}
