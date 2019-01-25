import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive: boolean = false;
    collapsed: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';
    expanded_crud: boolean = false;
    expanded_menu: boolean = false;
    expanded_restaurant: boolean = false;
    expanded_utils: boolean = false;
    user: any;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(public router: Router,
                private loginService: LoginService) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

        if (localStorage.getItem('access_token') == null) {
            this.router.navigate(['/login']);
        } else {
            this.loginService
                .user_me(localStorage.getItem('access_token'))
                .subscribe(
                    user => {
                        this.user = user
                    }
                )
        }
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        console.log(element);

        if (element == 'menu') {
            this.expanded_menu = !this.expanded_menu;
            if (this.expanded_crud) {
                this.expanded_crud = false;
            }
            if (this.expanded_restaurant) {
                this.expanded_crud = false;
            }
        } else if (element == 'cruds') {
            this.expanded_crud = !this.expanded_crud;
            if (this.expanded_menu) {
                this.expanded_menu = false;
            }
            if (this.expanded_restaurant) {
                this.expanded_restaurant = false;
            }
        } else if (element == 'restaurant') {
            this.expanded_restaurant = !this.expanded_restaurant;
            if (this.expanded_menu) {
                this.expanded_menu = false;
            }
            if (this.expanded_crud) {
                this.expanded_crud = false;
            }
        } else {
            this.expanded_utils = !this.expanded_utils;
            if (this.expanded_menu) {
                this.expanded_menu = false;
            }
            if (this.expanded_crud) {
                this.expanded_crud = false;
            }
        }

        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
