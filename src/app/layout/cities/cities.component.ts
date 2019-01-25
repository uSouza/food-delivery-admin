import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from './../../services/locations/locations.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

    cities = [];
    states = [];
    cityName = null;
    state = -1;
    city_edit: any = null;
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
            .getStates(localStorage.getItem('access_token'))
            .subscribe(
                states => this.states = states
            );
        this.locationsService
            .getCities(localStorage.getItem('access_token'))
            .subscribe(
                cities => this.cities = cities
            );
    }

    addCity() {
        if (this.validate()) {
            const city = {
                name: this.cityName,
                state_id: this.state
            };
            if (this.city_edit == null) {
                this.locationsService
                .addCity(localStorage.getItem('access_token'), city)
                .subscribe(
                    () => {
                        this.updateCities(false);
                    }
                );
            } else {
                this.locationsService
                .editCity(localStorage.getItem('access_token'), city, this.city_edit.id)
                .subscribe(
                    () => {
                        this.updateCities(true);
                    }
                );
            }
        }
    }

    editCity(city) {
        console.log(city);
        this.cityName = city.name;
        this.state = city.state_id;
        this.city_edit = city;
    }

    deleteCity(content, city) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result === 'delete') {
                    this.locationsService
                        .deleteCity(localStorage.getItem('access_token'), city.id)
                        .subscribe(
                            () => {
                                this.load();
                            }
                        );
                }
        });
    }

    updateCities(edit) {
        this.cityName = '';
        this.state = -1;
        this.load();

        if (edit) {
            this.showAlert('success', 'Cidade atualizada com sucesso!');
            this.city_edit = null;
        } else {
            this.showAlert('success', 'Cidade inserida com sucesso!');
        }

    }

    validate() {
        if (this.cityName == null) {
            this.showAlert('error', 'Informe o nome da cidade!');
            return false;
        } else if (this.state == null) {
            this.showAlert('error', 'Informe o estado da cidade!');
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
