import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-freights',
  templateUrl: './freights.component.html',
  styleUrls: ['./freights.component.scss']
})
export class FreightsComponent implements OnInit {

    districts: Observable<any[]>;
    selected_districts = [];
    freights = [];
    freight_value: any = null;
    access_token: any = null;

    constructor(public route: ActivatedRoute,
        private router: Router,
        private modalService: NgbModal) { }

    ngOnInit() {
        if (localStorage.getItem('access_token') != null) {
            // this.load();
        } else {
            this.router.navigate(['/login']);
        }
    }

}
