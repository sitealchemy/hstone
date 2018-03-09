import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { WallComponent } from './wall.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { DataService } from '../../services/data.service';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { ToastsManager, ToastOptions } from 'ng2-toastr';
import { AuthService } from '../../services/auth.service';

describe('WallComponent', () => {
  let component: WallComponent;
  let fixture: ComponentFixture<WallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallComponent ],
      imports: [FormsModule, HttpModule, RouterTestingModule, Ng2FilterPipeModule, OrderModule],
      providers: [DataService, ConnectionBackend, ToastsManager, ToastOptions, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});