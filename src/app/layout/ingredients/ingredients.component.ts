import { Component, OnInit } from '@angular/core';
import { IngredientGroupsService } from '../../services/ingredient-groups/ingredient-groups.service';
import { IngredientsService } from '../../services/ingredients/ingredients.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-ingredients',
    templateUrl: './ingredients.component.html',
    styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

    public alerts: Array<any> = [];
    name: any = null;
    ingredient_group_id: any = null;
    ingredient_edit: any = null;
    ingredients_groups: any[] = [];
    ingredients: any[] = [];
    page: number = 1;

    constructor(public route: ActivatedRoute,
        private router: Router,
        private ingredientGroupService: IngredientGroupsService,
        private ingredientsService: IngredientsService,
        private modalService: NgbModal) { }

    ngOnInit() {

        if (localStorage.getItem('access_token') != null) {
            this.load();
        } else {
            this.router.navigate(['/login']);
        }
    }

    load() {
        this.name = '';
        this.ingredientGroupService
            .getIngredientsGroups(localStorage.getItem('access_token'))
            .subscribe(
                ingredients_groups => {
                    this.addIngredientGroups(ingredients_groups)
                }
            );

        this.ingredientsService
            .getIngredients(localStorage.getItem('access_token'))
            .subscribe(
                ingredients => {
                    this.ingredients = ingredients
                }
            )
    }

    addIngredientGroups(ingredients_groups) {
        let groupControl = {
            name: '',
            id: 0
        }
        this.ingredients_groups = ingredients_groups;
        this.ingredients_groups.push(groupControl);
        this.ingredient_group_id = 0;
    }

    addIngredient() {
        if (this.validate()) {
            let ingredient = {
                name: this.name,
                ingredient_group_id: this.ingredient_group_id
            }

            if (this.ingredient_edit == null) {
                this.ingredientsService
                    .addIngredient(localStorage.getItem('access_token'), ingredient)
                    .subscribe(
                        ingredient => {
                            this.updateIngredients(ingredient, false)
                        },
                        err => {
                            if (err.error.text == 'ingredient already registered') {
                                this.showAlert('danger', 'Ingrediente já está cadastrado!');
                                this.name = null;
                                this.ingredient_group_id = null;
                            }
                        }
                    )
            } else {
                this.ingredientsService
                    .editIngredient(localStorage.getItem('access_token'), ingredient, this.ingredient_edit.id)
                    .subscribe(
                        ingredient => {
                            this.updateIngredients(ingredient, true)
                        }
                    )
            }
        }
    }

    updateIngredients(ingredient, edit) {
        this.name = null;
        this.ingredient_group_id = 0;
        this.load();
        console.log(ingredient);
        if (edit) {
            this.showAlert('success', 'Grupo de ingrediente atualizado com sucesso!');
            const index: number = this.ingredients.indexOf(this.ingredient_edit);
            this.ingredients.splice(index, 1);
            this.ingredient_edit = null;
        } else {
            this.showAlert('success', 'Grupo de ingrediente adicionado com sucesso!');
        }

    }

    validate() {
        if (this.name == null) {
            this.showAlert('danger', 'Informe o nome do ingrediente!');
            return false;
        } else if (this.ingredient_group_id == null) {
            this.showAlert('danger', 'Informe o grupo do ingrediente!');
            return false;
        } else {
            return true;
        }
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

    editIngredient(ingredient) {
        this.name = ingredient.name;
        this.ingredient_group_id = ingredient.ingredient_group_id;
        this.ingredient_edit = ingredient;
    }

    deleteIngredient(content, ingredient) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result == 'delete') {
                    this.ingredientsService
                        .deleteIngredient(localStorage.getItem('access_token'), ingredient.id)
                        .subscribe(
                            res => {
                                this.load()
                            }
                        )
                }
            });
    }

}
