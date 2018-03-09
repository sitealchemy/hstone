import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Message } from '../../models/message.model';
import { ToastsManager } from 'ng2-toastr';
import * as faker from 'faker';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit, OnDestroy {
  details: Message;
  users = [];
  $getMessage: Subscription;

  constructor(private activatedRoute: ActivatedRoute,  private router: Router, private dataService: DataService, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.generateUsers();
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.$getMessage = this.dataService.getDetails(params.id).subscribe(details => {
          this.details = details;
        }, error => {
          this.toastr.error(error.status, 'Server error');
        });
      }
    });
  }

  goBack($event) {
    $event.preventDefault();
    this.router.navigate(['/']);
  }

  getUserNameById(id: number) {
    return this.users[id];
  }

  private generateUsers() {
    for (let i = 0; i < 20; i++) {
      this.users[i] = faker.internet.userName();
    }
  }

  ngOnDestroy() {
    this.$getMessage.unsubscribe();
  }

}
