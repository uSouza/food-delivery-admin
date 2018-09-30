import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdditionalsService } from '../../services/additionals/additionals.service';

@Component({
  selector: 'app-additionals',
  templateUrl: './additionals.component.html',
  styleUrls: ['./additionals.component.scss']
})
export class AdditionalsComponent implements OnInit {

    page: number = 1;
    name: any = null;
    value: any = null;
    type: any = 0;
    types: any[] = [];
    isDrink = false;
    additionals: any[] = [];
    additional_edit: any = null;

    public alerts: Array<any> = [];

    constructor(public route: ActivatedRoute,
                private router: Router,
                private additionalsService: AdditionalsService,
                private modalService: NgbModal) { }

    ngOnInit() {

        if (localStorage.getItem('access_token') != null) {
            this.load();
            this.types = [
                {
                    id: 0,
                    name: ''
                },
                {
                    id: 1,
                    name: 'Adicional'
                },
                {
                    id: 2,
                    name: 'Bebida'
                }
            ]
        } else {
            this.router.navigate(['/login']);
        }

    }

    load() {
        this.additionalsService
        .getAdditionals(localStorage.getItem('access_token'))
        .subscribe(
            adds => {
                this.additionals = adds
            }
        )
    }

    addAdditional() {

        if (this.validate()) {
            if (this.type == 1) {
                this.isDrink = false;
            } else {
                this.isDrink = true;
            }

            let additional = {
                name: this.name,
                value: this.value,
                isDrink: this.isDrink
            }

            if (this.additional_edit == null) {
                this.additionalsService
                .addAdditional(localStorage.getItem('access_token'), additional)
                .subscribe(
                    additional => {
                        this.updateAdditionals(additional, false)
                    }
                )
            } else {
                this.additionalsService
                .editAdditional(localStorage.getItem('access_token'), additional, this.additional_edit.id)
                .subscribe(
                    additional => {
                        this.updateAdditionals(additional, true)
                    }
                )
            }

        }
    }

    updateAdditionals(additional, edit) {
        this.name = null;
        this.value = null;
        this.type = 0;
        this.isDrink = false;
        this.load();

        if (edit) {
            this.showAlert('success', 'Adicional atualizado com sucesso!');
            this.additional_edit = null;
        } else {
            this.showAlert('success', 'Adicional inserido com sucesso!');
        }

    }

    validate() {
        if (this.name == null) {
            this.showAlert('danger', 'Informe o nome do adicional!');
            return false;
        } else if (this.value == null) {
            this.showAlert('danger', 'Informe o valor do adicional!');
            return false;
        } else if (this.value <= 0) {
            this.showAlert('danger', 'O valor do adicional deve ser maior que zero!');
            return false;
        } else if (this.type == 0) {
            this.showAlert('danger', 'Selecione o tipo do item!');
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

    editAdditional(additional) {
        this.name = additional.name;
        this.value = additional.value;
        this.isDrink = additional.isDrink;
        if (additional.isDrink == false) {
            this.type = 1;
        } else {
            this.type = 2;
        }
        this.additional_edit = additional;
    }

    deleteAdditional(content, additional) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result == 'delete') {
                    this.additionalsService
                        .deleteAdditional(localStorage.getItem('access_token'), additional.id)
                        .subscribe(
                            res => {
                                this.load()
                            }
                        )
                }
            });
        }

}
