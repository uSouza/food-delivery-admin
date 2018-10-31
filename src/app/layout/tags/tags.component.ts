import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TagsService } from '../../services/tags/tags.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

    public alerts: Array<any> = [];

    name: any = null;
    tag_edit: any = null;
    tags: any[] = [];
    page: number = 1;

    constructor(public route: ActivatedRoute,
                private router: Router,
                private tagsService: TagsService,
                private modalService: NgbModal
                ) { }

    ngOnInit() {

        if (localStorage.getItem('access_token') != null) {
            this.tagsService
                .getTags(localStorage.getItem('access_token'))
                .subscribe(
                    tags => {
                        this.tags = tags
                    })
        } else {
            this.router.navigate(['/login']);
        }

    }

    addTag() {
        if (this.validate()) {
            if (this.tag_edit == null) {
                this.tagsService
                    .addTag(localStorage.getItem('access_token'), this.name)
                    .subscribe(
                        tag => {
                            this.updateTags(tag, false)
                        }
                    )
            } else {
                this.tagsService
                .editTag(localStorage.getItem('access_token'), this.name, this.tag_edit.id)
                .subscribe(
                    tag => {
                        this.updateTags(tag, true)
                    }
                )
            }

        }
    }

    updateTags(tag, edit) {
        this.name = null;
        this.tags.push(tag);
        if (edit) {
            this.showAlert('success', 'Tag atualizada com sucesso!');
            const index: number = this.tags.indexOf(this.tag_edit);
            this.tags.splice(index, 1);
            this.tag_edit = null;
        } else {
            this.showAlert('success', 'Tag cadastrada com sucesso!');
        }

    }

    validate() {
        if (this.name == null) {
            this.showAlert('danger', 'Informe o nome da Tag!');
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

    editTag(tag) {
        this.name = tag.name;
        this.tag_edit = tag;
    }

    deleteTag(content, tag) {
        this.modalService
            .open(content, { size: 'lg' })
            .result.then((result) => {
                if (result == 'delete') {
                    const index: number = this.tags.indexOf(tag);
                    this.tags.splice(index, 1);
                    this.tagsService
                        .deleteTag(localStorage.getItem('access_token'), tag.id)
                        .subscribe(
                            res => {
                                console.log(res)
                            }
                        )
                }
            });
    }

}
