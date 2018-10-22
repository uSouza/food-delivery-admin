import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RestaurantsService } from '../../../services/restaurants/restaurants.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-restaurants-show',
  templateUrl: './restaurants-show.component.html',
  styleUrls: ['./restaurants-show.component.scss']
})
export class RestaurantsShowComponent implements OnInit {

    restaurant: any;
    public alerts: Array<any> = [];

    constructor(public route: ActivatedRoute,
                private router: Router,
                private restaurantsService: RestaurantsService,
                private modalService: NgbModal) { }

    ngOnInit() {
        if (localStorage.getItem('access_token') != null) {
            this.getRestaurant();
        } else {
            this.router.navigate(['/login']);
        }
    }

    getRestaurant() {
        console.log(this.route.snapshot.paramMap.get('id'));
        this.restaurantsService
            .getRestaurant(localStorage.getItem('access_token'), this.route.snapshot.paramMap.get('id'))
            .subscribe(
                restaurant => {
                    this.setRestaurant(restaurant)
                }
            )
    }

    setRestaurant(restaurant) {
        console.log(restaurant);
        this.restaurant = restaurant;
    }

    edit() {
        localStorage.setItem('restaurant_edit', JSON.stringify(this.restaurant));
        this.router.navigate(['/restaurants-form', { id: this.restaurant.id }])
    }

    delete(content) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result == 'delete') {
                    this.restaurantsService
                        .deleteRestaurant(localStorage.getItem('access_token'), this.restaurant.id)
                        .subscribe(
                            res => { this.router.navigate(['/menus-list', { message: 'Restaurante inativado com sucesso!' }]) },
                            err => { this.showAlert('danger', err) }
                        )
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

    restoreRestaurant(restaurant) {
        this.restaurantsService
            .restoreRestaurant(localStorage.getItem('access_token'), restaurant.id)
            .subscribe(
                res => this.router.navigate(['/restaurants-list', { message: 'Restaurante reativado com sucesso!' }])
            )
    }

}
