import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  titulo: any = null;
  conteudo: any = null;
  public alerts: Array<any> = [];

  constructor(public route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private loginService: LoginService) { }

  ngOnInit() {
  }

  send() {
    if (this.validate()) {
      this.loginService
          .sendPushNotification(this.titulo, this.conteudo)
          .subscribe(
            success => {
              this.showAlert('success', 'Notificação enviada com sucesso!');
              this.titulo = null;
              this.conteudo = null;
            },
            err => {
              this.showAlert('danger', 'Erro ao enviar notificação: ' + err.error.text);
            }
          )
    }
  }

  validate() {
    console.log(this.titulo);
    console.log(this.conteudo);
    if (this.titulo == null) {
      this.showAlert('danger', 'É necessário informar o título!');
      return false;
    } else if (this.conteudo == null) {
      this.showAlert('danger', 'É necessário informar algum conteúdo!');
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
    )
}

closeAlert(alert: any) {
  const index: number = this.alerts.indexOf(alert);
  this.alerts.splice(index, 1);
}

confirm(content) {
  this.modalService
      .open(content, { size: 'lg' })
      .result.then((result) => {
          if (result == 'send') {
              this.send();
          }
      });
}

}
