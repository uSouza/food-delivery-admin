import { Component, OnInit } from '@angular/core';
import { IngredientGroupsService } from '../../../services/ingredient-groups/ingredient-groups.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ingredient-groups-form',
  templateUrl: './ingredient-groups-form.component.html',
  styleUrls: ['./ingredient-groups-form.component.scss']
})
export class IngredientGroupsFormComponent implements OnInit {

    public alerts: Array<any> = [];

    name: any = null;
    ingredient_group_edit: any = null;
    number_options: any = null;
    ingredients_groups: any[] = [];
    page: number = 1;

    constructor(public route: ActivatedRoute,
                private router: Router,
                private ingredientGroupService: IngredientGroupsService,
                private modalService: NgbModal
                ) { }

    ngOnInit() {

        if (localStorage.getItem('access_token') != null) {
            this.ingredientGroupService
                .getIngredientsGroups(localStorage.getItem('access_token'))
                .subscribe(
                    ingredients_groups => {
                        this.ingredients_groups = ingredients_groups
                    })
        } else {
            this.router.navigate(['/login']);
        }

    }

    addIngredientGroup() {
        if (this.validate()) {
            let ingredient_group = {
                name: this.name,
                number_options: this.number_options
            }
            if (this.ingredient_group_edit == null) {
                this.ingredientGroupService
                .addIngredientGroup(localStorage.getItem('access_token'), ingredient_group)
                .subscribe(
                    ingredient_group => {
                        this.updateIngredientGroups(ingredient_group, false)
                    }
                )
            } else {
                this.ingredientGroupService
                .editIngredientGroup(localStorage.getItem('access_token'), ingredient_group, this.ingredient_group_edit.id)
                .subscribe(
                    ingredient_group => {
                        this.updateIngredientGroups(ingredient_group, true)
                    }
                )
            }

        }
    }

    updateIngredientGroups(ingredient_group, edit) {
        this.name = null;
        this.number_options = null;
        this.ingredients_groups.push(ingredient_group);
        if (edit) {
            this.showAlert('success', 'Grupo de ingrediente atualizado com sucesso!');
            const index: number = this.ingredients_groups.indexOf(this.ingredient_group_edit);
            this.ingredients_groups.splice(index, 1);
            this.ingredient_group_edit = null;
        } else {
            this.showAlert('success', 'Grupo de ingrediente adicionado com sucesso!');
        }

    }

    validate() {
        if (this.name == null) {
            this.showAlert('danger', 'Informe o nome do grupo de ingrediente!');
            return false;
        } else if (this.number_options == null) {
            this.showAlert('danger', 'Informe o número de opções para o grupo de ingrediente!');
            return false;
        } else if (this.number_options <= 0) {
            this.showAlert('danger', 'O número de opções não deve ser menor ou igual a zero!');
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

    editIngredientGroup(ingredient_group) {
        this.name = ingredient_group.name;
        this.number_options = ingredient_group.number_options;
        this.ingredient_group_edit = ingredient_group;
    }

    deleteIngredientGroup(content, ingredient_group) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result == 'delete') {
                    const index: number = this.ingredients_groups.indexOf(ingredient_group);
                    this.ingredients_groups.splice(index, 1);
                    this.ingredientGroupService
                        .deleteIngredientGroup(localStorage.getItem('access_token'), ingredient_group.id)
                        .subscribe(
                            res => {
                                console.log(res)
                            }
                        )
                }
            });
    }
}
