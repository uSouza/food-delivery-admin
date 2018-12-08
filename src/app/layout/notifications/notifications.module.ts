import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NotificationsRoutingModule,
        NgbAlertModule.forRoot()
        ],
    declarations: [NotificationsComponent]
})
export class NotificationsModule {}
