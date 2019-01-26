import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant, BootstrapTime } from '../restaurant';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantsService } from '../../../services/restaurants/restaurants.service';
import { TagsService } from '../../../services/tags/tags.service';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-restaurants-form',
  templateUrl: './restaurants-form.component.html',
  styleUrls: ['./restaurants-form.component.scss']
})
export class RestaurantsFormComponent implements OnInit {

    public alerts: Array<any> = [];

    edit = false;
    tags: Observable<any[]>;
    selected_tags = [];
    allDistricts: Observable<any[]>;
    selected_districts = [];
    restaurant: Restaurant = new Restaurant();
    restaurant_edit: any;
    access_token: any = null;
    password_confirmation: any = null;
    avg_delivery_time = {
        hour: 0,
        minute: 40
    };
    step = 1;
    step_number = 7;
    service_hours = [];
    opening = {
        hour: 0,
        minute: 0
    };
    closure = {
        hour: 0,
        minute: 0
    };
    wdays = {
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false
    };
    selectedFile: File;

    days_of_week = [
        {
            name: 'Domingo',
            id: 0
        },
        {
            name: 'Segunda-Feira',
            id: 1
        },
        {
            name: 'Terça-Feira',
            id: 2
        },
        {
            name: 'Quarta-Feira',
            id: 3
        },
        {
            name: 'Quinta-Feira',
            id: 4
        },
        {
            name: 'Sexta-Feira',
            id: 5
        },
        {
            name: 'Sábado',
            id: 6
        }
    ];
    selected_days_of_week = [];

    cities = [];
    districts = [];
    freights = [];
    freight_value: any = null;

    constructor(public route: ActivatedRoute,
                private router: Router,
                public datepipe: DatePipe,
                private modalService: NgbModal,
                private restaurantsService: RestaurantsService,
                private tagsService: TagsService,
                private loginService: LoginService) { }

    ngOnInit() {
        if (localStorage.getItem('access_token') != null) {
            this.access_token = localStorage.getItem('access_token');
            if (this.route.snapshot.paramMap.get('id') != null) {
                this.edit = true;
                const restaurant_edit = JSON.parse(localStorage.getItem('restaurant_edit'));
                this.restaurant_edit = restaurant_edit;
                restaurant_edit.tags.forEach((i) => {
                    this.selected_tags.push(i);
                });
                this.setWorkedDays(this.restaurant_edit.worked_days);
            }
            this.load();
        } else {
            this.router.navigate(['/login']);
        }
    }

    load() {
        if (this.edit) {
            this.updateFields();
        }
        this.tags = this.tagsService.getTags(this.access_token);
        this.allDistricts = this.restaurantsService.getDistricts(this.access_token, this.restaurant_edit.locations[0].district.city_id);
        this.restaurantsService
            .getCities(this.access_token)
            .subscribe(cities => {
                this.cities = cities;
            });
    }

    getDistricts(city) {
        this.restaurantsService
            .getDistricts(this.access_token, city)
            .subscribe(
                districts => this.districts = districts
            );
    }

    updateFields() {
        this.avg_delivery_time.hour = parseInt(this.restaurant_edit.avg_delivery_time.split(':')[0], 10);
        this.avg_delivery_time.minute = parseInt(this.restaurant_edit.avg_delivery_time.split(':')[1], 10);
        this.getDistricts(this.restaurant_edit.locations[0].district.city_id);
        this.restaurant.email = this.restaurant_edit.user.email;
        this.restaurant.social_name = this.restaurant_edit.social_name;
        this.restaurant.fantasy_name = this.restaurant_edit.fantasy_name;
        this.restaurant.responsible_name = this.restaurant_edit.responsible_name;
        this.restaurant.responsible_phone = this.restaurant_edit.responsible_phone;
        this.restaurant.cnpj = this.restaurant_edit.cnpj;
        this.restaurant.cell_phone = this.restaurant_edit.cell_phone;
        this.restaurant.phone = this.restaurant_edit.phone;
        this.restaurant.order_limit = this.restaurant_edit.order_limit;
        this.restaurant.delivery_value = this.restaurant_edit.delivery_value;
        this.restaurant.avg_delivery_time = this.restaurant_edit.avg_delivery_time;
        if (this.restaurant_edit.locations.length > 0) {
            this.restaurant.address = this.restaurant_edit.locations[0].address;
            this.restaurant.number = this.restaurant_edit.locations[0].number;
            this.restaurant.postal_code = this.restaurant_edit.locations[0].postal_code;
            this.restaurant.state = this.restaurant_edit.locations[0].state;
            this.restaurant.city = this.restaurant_edit.locations[0].district.city_id;
            this.restaurant.district = this.restaurant_edit.locations[0].district_id;
            this.restaurant.observation = this.restaurant_edit.locations[0].observation;
        }
        this.service_hours = this.restaurant_edit.service_hours;
        this.freights = this.restaurant_edit.freights;
        this.restaurant.image = this.restaurant_edit.image_base64;
    }

    setWorkedDays(worked_days) {
        worked_days.forEach((wday) => {
            console.log(wday);
            if (wday.sunday) {
                this.selected_days_of_week.push(this.days_of_week.find(d => d.id == 0));
            }
            if (wday.monday) {
                console.log(this.days_of_week.find(d => d.id == 1));
                this.selected_days_of_week.push(this.days_of_week.find(d => d.id == 1));
            }
            if (wday.tuesday) {
                this.selected_days_of_week.push(this.days_of_week.find(d => d.id == 2));
            }
            if (wday.wednesday) {
                this.selected_days_of_week.push(this.days_of_week.find(d => d.id == 3));
            }
            if (wday.thursday) {
                this.selected_days_of_week.push(this.days_of_week.find(d => d.id == 4));
            }
            if (wday.friday) {
                this.selected_days_of_week.push(this.days_of_week.find(d => d.id == 5));
            }
            if (wday.saturday) {
                this.selected_days_of_week.push(this.days_of_week.find(d => d.id == 6));
            }
        });
        console.log(this.selected_days_of_week);
    }

    validate() {
        if (this.step === 1) {
            if (! this.edit) {
                if (this.restaurant.email == null) {
                    this.showAlert('danger', 'Informe um endereço de email!');
                    return false;
                } else if (this.restaurant.password == null) {
                    this.showAlert('danger', 'É necessário informar uma senha!');
                    return false;
                } else if (this.restaurant.password != this.password_confirmation) {
                    this.showAlert('danger', 'A senha informada não coincide com a confirmação!');
                    return false;
                } else {
                    return true;
                }
            } else {
                if (this.restaurant.email == null) {
                    this.showAlert('danger', 'Informe um endereço de email!');
                    return false;
                } else {
                    return true;
                }
            }
        } else if (this.step === 2) {
            if (this.restaurant.social_name == null) {
                this.showAlert('danger', 'Informe a razão social do restaurante!');
                return false;
            } else if (this.restaurant.fantasy_name == null) {
                this.showAlert('danger', 'Informe o nome fantasia do restaurante!');
                return false;
            } else if (this.restaurant.cell_phone == null) {
                this.showAlert('danger', 'Informe o celular do restaurante!');
                return false;
            } else if (this.restaurant.phone == null) {
                this.showAlert('danger', 'Informe o telefone do restaurante!');
                return false;
            } else if (this.restaurant.cnpj == null) {
                this.showAlert('danger', 'Informe o CNPJ do restaurante!');
                return false;
            } else {
                return true;
            }
        } else if (this.step === 3) {
            if (this.restaurant.responsible_name == null) {
                this.showAlert('danger', 'Informe o nome do responsável pelo restaurante!');
                return false;
            } else if (this.restaurant.responsible_phone == null) {
                this.showAlert('danger', 'Informe o telefone do responsável pelo restaurante!');
                return false;
            } else {
                return true;
            }
        } else if (this.step === 4) {
            console.log(this.restaurant.delivery_value);
            if (this.selected_tags.length < 1) {
                this.showAlert('danger', 'Selecione ao menos uma tag!');
                return false;
            } else if (this.selectedFile == null && ! this.edit) {
                this.showAlert('danger', 'Selecione a imagem do restaurante!');
                return false;
            } else if (this.restaurant.delivery_value == null) {
                this.showAlert('danger', 'Informe a taxa de entrega!');
                return false;
            } else if (this.avg_delivery_time == null) {
                this.showAlert('danger', 'Informe tempo médio de entrega!');
                return false;
            } else if (this.restaurant.order_limit == null) {
                this.showAlert('danger', 'Informe a quantidade máxima de pedidos por dia!');
                return false;
            } else if (this.restaurant.order_limit < 1) {
                this.showAlert('danger', 'O limite de pedidos não pode ser menor que 1!');
                return false;
            } else if (this.restaurant.delivery_value < 0) {
                this.showAlert('danger', 'A taxa de entrega não pode ser menor que zero!');
                return false;
            } else {
                console.log(this.avg_delivery_time);
                this.restaurant.avg_delivery_time = this.padLeft(this.avg_delivery_time.hour.toString(), '0', 2) +
                    ':' + this.padLeft(this.avg_delivery_time.minute.toString(), '0', 2) + ':00';
                console.log(this.restaurant.avg_delivery_time);
                return true;
            }
        } else if (this.step === 5) {
            if (this.restaurant.address == null) {
                this.showAlert('danger', 'Informe o endereço!');
                return false;
            } else if (this.restaurant.number == null) {
                this.showAlert('danger', 'Informe o número do endereço!');
                return false;
            } else if (this.restaurant.postal_code == null) {
                this.showAlert('danger', 'Informe o código postal!');
                return false;
            } else if (this.restaurant.city == null) {
                this.showAlert('danger', 'Informe a cidade!');
                return false;
            } else if (this.restaurant.district == null) {
                this.showAlert('danger', 'Informe o bairro!');
                return false;
            } else {
                return true;
            }
        } else {
            console.log(this.selected_days_of_week);
            if (this.service_hours.length < 1) {
                this.showAlert('danger', 'Informe os dados de atendimento!');
                return false;
            } else if (this.selected_days_of_week.length < 1) {
                this.showAlert('danger', 'Selecione os dias de atendimento!');
                return false;
            } else {
                return true;
            }
        }
    }

    padLeft(text: string, padChar: string, size: number): string {
        return (String(padChar).repeat(size) + text).substr( (size * -1), size) ;
    }

    addWorkDayItem(item) {
        this.selected_days_of_week.push(item);
        console.log(this.selected_days_of_week);
    }

    removeWorkItem(item) {
        const index: number = this.selected_days_of_week.indexOf(item);
        this.selected_days_of_week.splice(index, 1);
    }

    addTagItem(item) {
        this.selected_tags.push(item);
    }

    removeTagItem(item) {
        const index: number = this.selected_tags.indexOf(item);
        this.selected_tags.splice(index, 1);
    }

    addDistrictItem(item) {
        this.selected_districts.push(item);
    }

    removeDistrictItem(item) {
        const index: number = this.selected_districts.indexOf(item);
        this.selected_districts.splice(index, 1);
    }

    prepare() {
        this.restaurant.tags_ids = [];
        this.selected_tags.forEach((i) => {
            this.restaurant.tags_ids.push(i.id);
        });
        this.selected_days_of_week.forEach((wday) => {
            if (wday.id == 0) {
                this.wdays.sunday = true;
            } else if (wday.id == 1) {
                this.wdays.monday = true;
            } else if (wday.id == 2) {
                this.wdays.tuesday = true;
            } else if (wday.id == 3) {
                this.wdays.wednesday = true;
            } else if (wday.id == 4) {
                this.wdays.thursday = true;
            } else if (wday.id == 5) {
                this.wdays.friday = true;
            } else {
                this.wdays.saturday = true;
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

    addServiceHour() {
        if (this.opening != null && this.closure != null) {

            const service_hour = {
                opening: this.padLeft(this.opening.hour.toString(), '0', 2) + ':' +
                    this.padLeft(this.opening.minute.toString(), '0', 2) + ':00',
                closure: this.padLeft(this.closure.hour.toString(), '0', 2) + ':' +
                this.padLeft(this.closure.minute.toString(), '0', 2) + ':00',
            };

            this.service_hours.push(service_hour);

            this.opening = {
                hour: 0,
                minute: 0
            };
            this.closure = {
                hour: 0,
                minute: 0
            };

        } else {
            this.showAlert('danger', 'Informe os dados de atendimento!');
        }
    }

    addFreight() {
        if (this.selected_districts.length > 0 && this.freight_value != null) {
            this.selected_districts.forEach(d => {
                const freight = {
                    district: d,
                    value: this.freight_value
                };
                this.freights.forEach(f => {
                    if (f.district.id === d.id) {
                        const index: number = this.freights.indexOf(f);
                        this.freights.splice(index, 1);
                    }
                });
                this.freights.push(freight);
            });
        } else {
            this.showAlert('danger', 'Informe os dados corretamente!');
        }
        console.log(this.freights);
        this.selected_districts = null;
        this.freight_value = null;
    }

    deleteServiceHour(hour) {
        const index: number = this.service_hours.indexOf(hour);
        this.service_hours.splice(index, 1);
    }

    deleteFreight(freight) {
        const index: number = this.freights.indexOf(freight);
        this.freights.splice(index, 1);
    }

    nextStep() {
        if (this.validate()) {
            if (this.step < this.step_number) {
                this.step = this.step + 1;
            }
        }
    }

    backStep() {
        if (this.step > 1) {
            this.step = this.step - 1;
        }
    }

    fileChange(event) {
        this.selectedFile = event.target.files[0];
        var reader: FileReader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.selectedFile);
    }

    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        let header = 'data:' + this.selectedFile.type + ';base64,';
        this.restaurant.image = header + '' + btoa(binaryString);
    }

    save() {
        if (this.validate()) {
            if (! this.edit) {
                this.loginService
                .addUser(this.access_token, this.restaurant.email, this.restaurant.fantasy_name, this.restaurant.password)
                .subscribe(
                    user => {
                        this.saveRestaurant(user);
                    }
                )
            } else {
                this.loginService
                .updateUser(this.access_token, this.restaurant.email, this.restaurant.fantasy_name, this.restaurant.password, this.restaurant_edit.user.id)
                .subscribe(
                    user => {
                        this.saveRestaurant(user)
                    }
                )
            }

        }
    }

    saveRestaurant(user) {
        let location = {
            address: this.restaurant.address,
            number: this.restaurant.number,
            postal_code: this.restaurant.postal_code.substr(0, 5) + '-' + this.restaurant.postal_code.substr(5, 3),
            district: this.restaurant.district,
            observation: this.restaurant.complement
        }
        this.prepare();
        if (! this.edit) {
            this.restaurant.user_id = user.id;
            this.restaurantsService
                .addRestaurant(this.access_token, this.restaurant)
                .subscribe(
                    restaurant => {
                        this.restaurantsService
                            .addLocation(this.access_token, location, restaurant)
                            .subscribe(
                                location => {
                                    this.restaurantsService
                                        .addWorkedDays(this.access_token, this.wdays, restaurant)
                                        .subscribe(
                                            wdays => {
                                                this.addServiceHours(restaurant)
                                            }
                                        )
                                }
                            )
                    }
                )
        } else {
            console.log(this.restaurant_edit.locations[0].id);
            this.restaurantsService
                .editRestaurant(this.access_token, this.restaurant, this.restaurant_edit.id)
                .subscribe(
                    restaurant => {
                        this.restaurantsService
                            .editLocation(this.access_token, location, restaurant, this.restaurant_edit.locations[0].id)
                            .subscribe(
                                location => {
                                    this.restaurantsService
                                        .editWorkedDays(this.access_token, this.wdays, restaurant, this.restaurant_edit.worked_days[0].id)
                                        .subscribe(
                                            wdays => {
                                                this.addServiceHours(restaurant)
                                            }
                                        )
                                }
                            )
                    }
                )
        }

    }

    addServiceHours(restaurant) {
        if (! this.edit) {
            this.service_hours.forEach((s) => {
                let service_hour = {
                    company_id: restaurant.id,
                    opening: s.opening,
                    closure: s.closure
                }
                this.restaurantsService
                    .addServiceHours(this.access_token, service_hour, restaurant)
                    .subscribe(
                        service_hour => this.addFreights(restaurant)
                    )
            });
        } else {
            this.restaurantsService
                .destroyServiceHours(this.access_token, restaurant)
                .subscribe(
                    service_hours => {
                        this.service_hours.forEach((s) => {
                            let service_hour = {
                                company_id: restaurant.id,
                                opening: s.opening,
                                closure: s.closure
                            };
                            this.restaurantsService
                                .addServiceHours(this.access_token, service_hour, restaurant)
                                .subscribe(
                                    service_hour => this.addFreights(restaurant)
                                );
                        });
                    }
                )
        }

    }

    addFreights(restaurant) {
        if (! this.edit) {
            this.freights.forEach((f) => {
                const freight = {
                    company_id: restaurant.id,
                    district_id: f.district.id,
                    value: f.value
                };
                this.restaurantsService
                    .addFreights(this.access_token, freight)
                    .subscribe(
                        service_hour => this.router.navigate(['/restaurants-list', { message: 'Restaurante cadastrado com sucesso!' }])
                    );
            });
        } else {
            this.restaurantsService
                .destroyFreights(this.access_token, restaurant)
                .subscribe(
                    freights => {
                        this.freights.forEach((f) => {
                            const freight = {
                                company_id: restaurant.id,
                                district_id: f.district.id,
                                value: f.value
                            };
                            this.restaurantsService
                                .addFreights(this.access_token, freight)
                                .subscribe(
                                    service_hour => {
                                        this.router.navigate(['/restaurants-list', { message: 'Restaurante cadastrado com sucesso!' }]);
                                    }
                                );
                        });
                    }
                );
        }

    }

}
