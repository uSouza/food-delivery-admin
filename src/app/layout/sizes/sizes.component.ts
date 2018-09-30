import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SizesService } from '../../services/sizes/sizes.service';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.scss']
})
export class SizesComponent implements OnInit {

    sizes_available: any [];
    sizes: any [];
    size: any = '';
    price: any = null;
    size_edit: any = null;

    public alerts: Array<any> = [];

    constructor(public route: ActivatedRoute,
        private router: Router,
        private sizesService: SizesService,
        private modalService: NgbModal) { }

    ngOnInit() {
        if (localStorage.getItem('access_token') != null) {
            this.load();
            this.sizes_available = [
                { name: '' },
                { name: 'P' },
                { name: 'M' },
                { name: 'G' },
                { name: 'GG' },
                { name: 'Fitness' },
                { name: 'Especial' }
            ];
        } else {
            this.router.navigate(['/login']);
        }

    }

    load() {
        this.sizesService
            .getSizes(localStorage.getItem('access_token'))
            .subscribe(
                sizes => {
                    this.sizes = sizes
                }
            )
    }

    addSize() {

        if (this.validate()) {

            let size = {
                size: this.size,
                price: this.price
            }

            if (this.size_edit == null) {
                this.sizesService
                .addSize(localStorage.getItem('access_token'), size)
                .subscribe(
                    size => {
                        this.updateSizes(size, false)
                    }
                )
            } else {
                this.sizesService
                .editSize(localStorage.getItem('access_token'), size, this.size_edit.id)
                .subscribe(
                    size => {
                        this.updateSizes(size, true)
                    }
                )
            }

        }
    }

    editSize(size) {
        this.size = size.size;
        this.price = size.price;
        this.size_edit = size;
    }

    deleteSize(content, size) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result == 'delete') {
                    this.sizesService
                        .deleteSize(localStorage.getItem('access_token'), size.id)
                        .subscribe(
                            res => {
                                this.load()
                            }
                        )
                }
        });
    }

    updateSizes(additional, edit) {
        this.size = '';
        this.price = null;
        this.load();

        if (edit) {
            this.showAlert('success', 'Tamanho atualizado com sucesso!');
            this.size_edit = null;
        } else {
            this.showAlert('success', 'Tamanho inserido com sucesso!');
        }

    }

    validate() {
        if (this.size == '') {
            this.showAlert('danger', 'Informe o tamanho a ser cadastrado!');
            return false;
        } else if (this.price == null) {
            this.showAlert('danger', 'Informe o valor do tamanho!');
            return false;
        } else if (this.price <= 0) {
            this.showAlert('danger', 'O valor do tamanho deve ser maior que zero!');
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

}
