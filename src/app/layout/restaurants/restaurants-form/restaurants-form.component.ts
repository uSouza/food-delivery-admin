import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../restaurant';
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

    edit: boolean = false;
    tags: Observable<any[]>;
    selected_tags = [];
    restaurant: Restaurant = new Restaurant();
    access_token: any = null;
    password_confirmation: any = null;
    step: number = 1;
    step_number: number = 6;
    service_hours = [];
    opening: any = null;
    closure: any = null;
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
                let restaurant = JSON.parse(localStorage.getItem('restaurant_edit'));
                this.restaurant = restaurant;
                restaurant.tags.forEach((i) => {
                    this.selected_tags.push(i);
                });
            }
            this.load();
        } else {
            this.router.navigate(['/login']);
        }
    }

    load() {
        this.tags = this.tagsService.getTags(this.access_token);
    }

    validate() {if (this.step == 1) {
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
        } else if (this.step == 2) {
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
        } else if (this.step == 3) {
            if (this.restaurant.responsible_name == null) {
                this.showAlert('danger', 'Informe o nome do responsável pelo restaurante!');
                return false;
            } else if (this.restaurant.responsible_phone == null) {
                this.showAlert('danger', 'Informe o telefone do responsável pelo restaurante!');
                return false;
            } else {
                return true;
            }
        } else if (this.step == 4) {
            console.log(this.restaurant.delivery_value);
            if (this.selected_tags.length < 1) {
                this.showAlert('danger', 'Selecione ao menos uma tag!');
                return false;
            } else if (this.selectedFile == null) {
                this.showAlert('danger', 'Selecione a imagem do restaurante!');
                return false;
            } else if (this.restaurant.delivery_value == null) {
                this.showAlert('danger', 'Informe a taxa de entrega!');
                return false;
            } else if (this.restaurant.avg_delivery_time == null) {
                this.showAlert('danger', 'Informe tempo médio de entrega!');
                return false;
            } else if (this.restaurant.order_limit == null) {
                this.showAlert('danger', 'Informe a quantidade máxima de pedidos por dia!');
                return false;
            } else if (parseInt(this.restaurant.avg_delivery_time.substr(0, 2)) > 23
                       || parseInt(this.restaurant.avg_delivery_time.substr(2, 2)) > 59
                       || parseInt(this.restaurant.avg_delivery_time.substr(4, 2)) > 59) {
                this.showAlert('danger', 'O tempo médio informado não é válido!');
                return false;
            } else if (this.restaurant.order_limit < 1) {
                this.showAlert('danger', 'O limite de pedidos não pode ser menor que 1!');
                return false;
            } else if (this.restaurant.delivery_value < 0) {
                this.showAlert('danger', 'A taxa de entrega não pode ser menor que zero!');
                return false;
            } else {
                this.restaurant.avg_delivery_time = this.restaurant.avg_delivery_time.substr(0, 2) + ':' + this.restaurant.avg_delivery_time.substr(2, 2) + ':' + this.restaurant.avg_delivery_time.substr(4, 2);
                return true;
            }
        } else if (this.step == 5) {
            if (this.restaurant.address == null) {
                this.showAlert('danger', 'Informe o endereço!');
                return false;
            } else if (this.restaurant.number == null) {
                this.showAlert('danger', 'Informe o número do endereço!');
                return false;
            } else if (this.restaurant.postal_code == null) {
                this.showAlert('danger', 'Informe o código postal!');
                return false;
            } else if (this.restaurant.state == null) {
                this.showAlert('danger', 'Informe o estado!');
                return false;
            } else if (this.restaurant.city == null) {
                this.showAlert('danger', 'Informe a cidade!');
                return false;
            } else if (this.restaurant.city == null) {
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
            }
            else {
                return true;
            }
        }
    }

    addWorkDayItem(item) {
        this.selected_days_of_week.push(item);
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
        )
    }

    closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    addServiceHour() {
        if (this.opening != null && this.closure != null) {
            if (parseInt(this.opening.substr(0, 2)) > 23
                || parseInt(this.opening.substr(2, 2)) > 59
                || parseInt(this.opening.substr(4, 2)) > 59
                || parseInt(this.closure.substr(0, 2)) > 23
                || parseInt(this.closure.substr(2, 2)) > 59
                || parseInt(this.closure.substr(4, 2)) > 59) {
                this.showAlert('danger', 'Os horários informados para o atendimento não são válidos!');
                this.opening = null;
                this.closure = null;
                return false;
            } else {
                this.opening = this.opening.substr(0, 2) + ':' + this.opening.substr(2, 2) + ':' + this.opening.substr(4, 2);
                this.closure = this.closure.substr(0, 2) + ':' + this.closure.substr(2, 2) + ':' + this.closure.substr(4, 2);

                let service_hour = {
                    opening: this.opening,
                    closure: this.closure
                }
                this.service_hours.push(service_hour);
            }
            this.opening = null;
            this.closure = null;
        } else {
            this.showAlert('danger', 'Informe os dados de atendimento!');
        }
    }

    deleteServiceHour(hour) {
        const index: number = this.service_hours.indexOf(hour);
        this.service_hours.splice(index, 1);
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
        var reader:FileReader = new FileReader();
        reader.onload =this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.selectedFile);
    }

    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        let header ='data:' + this.selectedFile.type + ';base64,';
        this.restaurant.image= header + '' + btoa(binaryString);
       }

    save() {
        if (this.validate()) {
            this.loginService
                .addUser(this.access_token, this.restaurant.email, this.restaurant.fantasy_name, this.restaurant.password)
                .subscribe(
                    user => {
                        this.saveRestaurant(user)
                    }
                )
        }
    }

    saveRestaurant(user) {
        let location = {
            city: this.restaurant.city,
            state: this.restaurant.state,
            address: this.restaurant.address,
            number: this.restaurant.number,
            postal_code: this.restaurant.postal_code.substr(0, 5) + '-' + this.restaurant.postal_code.substr(5, 3),
            district: this.restaurant.district,
            observation: this.restaurant.complement
        }
        this.prepare();
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
        this.router.navigate(['/restaurants-list', { message: 'Restaurante cadastrado com sucesso!' }]);
    }

    addServiceHours(restaurant) {
        this.service_hours.forEach((s) => {
            let service_hour = {
                company_id: restaurant.id,
                opening: s.opening,
                closure: s.closure
            }
            this.restaurantsService
                .addServiceHours(this.access_token, service_hour, restaurant)
                .subscribe(
                    service_hour => console.log(service_hour)
                )
        });
    }

}