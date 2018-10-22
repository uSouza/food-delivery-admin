import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormPaymentsService } from '../../services/form-payments/form-payments.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-payments',
  templateUrl: './form-payments.component.html',
  styleUrls: ['./form-payments.component.scss']
})
export class FormPaymentsComponent implements OnInit {

    public alerts: Array<any> = [];

    description: any = null;
    form_payment_edit: any = null;
    form_payments: any[] = [];
    page: number = 1;

    constructor(public route: ActivatedRoute,
                private router: Router,
                private formPaymentsService: FormPaymentsService,
                private modalService: NgbModal
                ) { }

    ngOnInit() {

        if (localStorage.getItem('access_token') != null) {
            this.formPaymentsService
                .getFormPayments(localStorage.getItem('access_token'))
                .subscribe(
                    form_payments => {
                        this.form_payments = form_payments
                    })
        } else {
            this.router.navigate(['/login']);
        }

    }

    addFormPayment() {
        if (this.validate()) {
            let form_payment = {
                description: this.description
            }
            if (this.form_payment_edit == null) {
                this.formPaymentsService
                    .addFormPayment(localStorage.getItem('access_token'), form_payment)
                    .subscribe(
                        form_payment => {
                            this.updateFormPayments(form_payment, false)
                        }
                    )
            } else {
                this.formPaymentsService
                .editFormPayment(localStorage.getItem('access_token'), form_payment, this.form_payment_edit.id)
                .subscribe(
                    form_payment => {
                        this.updateFormPayments(form_payment, true)
                    }
                )
            }

        }
    }

    updateFormPayments(form_payment, edit) {
        this.description = null;
        this.form_payments.push(form_payment);
        if (edit) {
            this.showAlert('success', 'Forma de pagamento atualizada com sucesso!');
            const index: number = this.form_payments.indexOf(this.form_payment_edit);
            this.form_payments.splice(index, 1);
            this.form_payment_edit = null;
        } else {
            this.showAlert('success', 'Forma de pagamento atualizada com sucesso!');
        }

    }

    validate() {
        if (this.description == null) {
            this.showAlert('danger', 'Informe a descrição da forma de pagamento!');
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

    editFormPayment(form_payment) {
        this.description = form_payment.description;
        this.form_payment_edit = form_payment;
    }

    deleteFormPayment(content, form_payment) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result == 'delete') {
                    const index: number = this.form_payments.indexOf(form_payment);
                    this.form_payments.splice(index, 1);
                    this.formPaymentsService
                        .deleteFormPayment(localStorage.getItem('access_token'), form_payment.id)
                        .subscribe(
                            res => {
                                console.log(res)
                            }
                        )
                }
            });
    }

}
