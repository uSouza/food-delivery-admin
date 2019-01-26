import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from './../../services/locations/locations.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss']
})
export class DistrictsComponent implements OnInit {

    cities = [];
    districts = [];
    districtName = null;
    city = -1;
    district_edit: any = null;
    alerts: Array<any> = [];

    constructor(public route: ActivatedRoute,
        private router: Router,
        private locationsService: LocationsService,
        private modalService: NgbModal) { }

    ngOnInit() {
        if (localStorage.getItem('access_token') != null) {
            this.load();
        } else {
            this.router.navigate(['/login']);
        }
    }

    load() {
        this.locationsService
            .getCities(localStorage.getItem('access_token'))
            .subscribe(
                cities => this.cities = cities
            );
        this.locationsService
            .getDistricts(localStorage.getItem('access_token'))
            .subscribe(
                districts => this.districts = districts
            );
    }

    addDistrict() {
        if (this.validate()) {
            const district = {
                name: this.districtName,
                city_id: this.city
            };
            if (this.district_edit == null) {
                this.locationsService
                .addDistrict(localStorage.getItem('access_token'), district)
                .subscribe(
                    () => {
                        this.updateDistricts(false);
                    }
                );
            } else {
                this.locationsService
                .editDistrict(localStorage.getItem('access_token'), district, this.district_edit.id)
                .subscribe(
                    () => {
                        this.updateDistricts(true);
                    }
                );
            }
        }
    }

    editDistrict(district) {
        this.districtName = district.name;
        this.city = district.city_id;
        this.district_edit = district;
    }

    deleteDistrict(content, district) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result === 'delete') {
                    this.locationsService
                        .deleteDistrict(localStorage.getItem('access_token'), district.id)
                        .subscribe(
                            () => {
                                this.load();
                            }
                        );
                }
        });
    }

    updateDistricts(edit) {
        this.districtName = '';
        this.city = -1;
        this.load();

        if (edit) {
            this.showAlert('success', 'Bairro atualizado com sucesso!');
            this.district_edit = null;
        } else {
            this.showAlert('success', 'Bairro inserido com sucesso!');
        }

    }

    validate() {
        if (this.districtName == null) {
            this.showAlert('danger', 'Informe o nome da cidade!');
            return false;
        } else if (this.city == null) {
            this.showAlert('danger', 'Informe o estado da cidade!');
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
        );
    }

    closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

}
