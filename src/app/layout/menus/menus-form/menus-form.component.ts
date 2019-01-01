import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IngredientsService } from '../../../services/ingredients/ingredients.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SizesService } from '../../../services/sizes/sizes.service';
import { MenusService } from '../../../services/menus/menus.service';
import { Menu } from '../menu';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menus-form',
  templateUrl: './menus-form.component.html',
  styleUrls: ['./menus-form.component.scss']
})
export class MenusFormComponent implements OnInit {

    public alerts: Array<any> = [];

    edit = false;
    ingredients: Observable<any[]>;
    selected_ingredients = [];
    sizes: Observable<any[]>;
    date: any = null;
    selected_sizes = [];
    ingredients_ids: any[] = [];
    prices_ids: any[] = [];
    menu: Menu = new Menu();
    access_token: any = null;

    constructor(public route: ActivatedRoute,
                private router: Router,
                private ingredientsService: IngredientsService,
                private sizesService: SizesService,
                private menusService: MenusService,
                public datepipe: DatePipe,
                private modalService: NgbModal) { }

    ngOnInit() {
        if (localStorage.getItem('access_token') != null) {
            this.access_token = localStorage.getItem('access_token');
            if (this.route.snapshot.paramMap.get('id') != null) {
                this.edit = true;
                let menu = JSON.parse(localStorage.getItem('menu_edit'));
                this.menu = menu;
                menu.ingredients.forEach((i) => {
                    this.selected_ingredients.push(i);
                });
                menu.prices.forEach((s) => {
                    this.selected_sizes.push(s);
                });
            }
            this.load();
        } else {
            this.router.navigate(['/login']);
        }
    }

    load() {
        this.ingredients = this.ingredientsService.getIngredients(this.access_token);
        this.sizes = this.sizesService.getSizes(this.access_token);
    }

    addMenu() {
        if (this.validate()) {
            if (this.menu.observation == null) {
                this.menu.observation = this.menu.description;
            }
            this.prepareIds();
            if (this.menu.fixed_menu) {
                this.date = '2000-01-01';
                this.menu.date = '2000-01-01';
            }
            if (!this.edit) {
                this.menusService
                    .addMenu(this.access_token, this.menu)
                    .subscribe(
                        menu => this.router.navigate(['/menus-list', { message: 'Menu cadastrado com sucesso!' }])
                    );
            } else {
                this.menusService
                    .editMenu(this.access_token, this.menu, this.menu.id)
                    .subscribe(
                        menu => this.router.navigate(['/menus-list', { message: 'Menu alterado com sucesso!' }])
                    );
            }
        }
    }

    validate() {
        let today = new Date();
        if (this.date != null) {
            this.menu.date = this.date.year + '-' + this.date.month + '-' + this.date.day;
        }
        if (this.selected_ingredients.length < 1) {
            this.showAlert('danger', 'Selecione os ingredientes da marmita!');
            return false;
        } else if (this.selected_sizes.length < 1) {
            this.showAlert('danger', 'Selecione os tamanhos da marmita!');
            return false;
        } else if (this.menu.description == null) {
            this.showAlert('danger', 'Informe a descrição da marmita!');
            return false;
        } else if (this.menu.date == null && (! this.menu.fixed_menu || this.menu.fixed_menu == null)) {
            this.showAlert('danger', 'Informe a data da marmita!');
            return false;
        } else if (this.datepipe.transform(today, 'yyyy-MM-dd') > this.menu.date
            && (! this.menu.fixed_menu || this.menu.fixed_menu == null)) {
            this.showAlert('danger', 'Informe uma data igual ou posterior a atual!');
            return false;
        } else {
            return true;
        }
    }

    prepareIds() {
        this.selected_ingredients.forEach((i) => {
            this.ingredients_ids.push(i.id);
        });
        this.selected_sizes.forEach((s) => {
            this.prices_ids.push(s.id);
        });
        this.menu.ingredients_ids = this.ingredients_ids;
        this.menu.prices_ids = this.prices_ids;
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
}
