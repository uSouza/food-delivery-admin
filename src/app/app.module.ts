import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { AuthGuard } from './shared';
import { LoginService } from './services/login/login.service';
import { OrdersService } from './services/orders/orders.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './services/loader-interceptor/loader-interceptor.service';
import { LayoutcitiesComponent } from './layoutcities/layoutcities.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        NgbModule.forRoot(),
        NgxMaskModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [AppComponent, LayoutcitiesComponent],
    providers: [
        AuthGuard,
        LoginService,
        OrdersService,
        DatePipe,
        NgbModal,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
