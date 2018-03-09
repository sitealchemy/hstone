import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Message } from '../../models/message.model';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.less']
})
export class WallComponent implements OnInit, OnDestroy {
  public messages: Message[] = [];
  search = {
    title: '',
    body: ''
  };
  $getMessage: Subscription;

  constructor(private dataService: DataService, private router: Router, private toastr: ToastsManager, private authService: AuthService, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.getMessages();
  }

  public getMessages() {
    this.$getMessage = this.dataService.getMessages()
    .subscribe(result => {
      this.showMessagesOnInterval(result, this.messages);
    }, error => {
      this.toastr.error(error.status, 'Server error');
    });
  }

  private showMessagesOnInterval(result, messages) {
    let index = 0;
    const interval = setInterval(()=>{
      this.messages.push(result[index]);
      index++;
      if (index == result.length - 1) {
        clearInterval(interval);
      }
    }, 1000);
  }
  
  showDetails($event, id: number) {
    $event.preventDefault();
    this.router.navigate(['/details', id]);
  }

  searchChange(value: string) {
    this.search = {
      title: value,
      body: value
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.$getMessage.unsubscribe();
  }

}
