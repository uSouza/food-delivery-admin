import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../../services/restaurants/restaurants.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {

    restaurants: any = [];

    page: number = 1;
    public alerts: Array<any> = [];

    constructor(public router: Router,
                public route: ActivatedRoute,
                private restaurantsService: RestaurantsService) { }

    ngOnInit() {
        if (this.route.snapshot.paramMap.get('message') != null) {
            this.showAlert('success', this.route.snapshot.paramMap.get('message'));
        }
        if (localStorage.getItem('access_token') == null) {
            this.router.navigate(['/login']);
        }
        this.getRestaurants();
    }

    getRestaurants() {
        this.restaurantsService
            .getRestaurants(localStorage.getItem('access_token'))
            .subscribe(
                restaurants => {
                    this.restaurants = restaurants
                }
            )
    }

    showRestaurant(restaurant: any) {
        this.router.navigate(['/restaurants-show', { id: restaurant.id }]);
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
