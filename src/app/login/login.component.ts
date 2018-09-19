import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    user = {
        email: '',
        password: ''
    };
    public alerts: Array<any> = [];

    constructor(
        public router: Router,
        private loginService: LoginService
    ) {}

    ngOnInit() {
        if (localStorage.getItem('access_token') != null) {
            this.router.navigate(['/dashboard']);
        }
    }

    onLoggedin() {

        this.loginService
            .authenticate(this.user)
            .subscribe(
                auth => {
                    this.saveAuth(auth)
                },
                err => {
                    this.showErrorAlert(err)
                }
            );
    }

    saveAuth(auth) {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('access_token', auth.access_token);
        this.router.navigate(['/dashboard']);
    }

    showErrorAlert(err) {
        this.alerts.push(
            {
                id: 1,
                type: 'danger',
                message: `Email ou senha incorretos. Tente novamente!`
            }
        )
    }
    closeErrorAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

}
