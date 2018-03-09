import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../services/data.service';
import { Http, HttpModule, ConnectionBackend } from '@angular/http';
import { ToastsManager, ToastOptions } from 'ng2-toastr';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [RouterTestingModule, HttpModule],
      providers: [DataService, Http, ConnectionBackend, ToastsManager, ToastOptions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('gets user by id', () => {
    const user = component.getUserNameById(1);
    expect(user).toBeDefined();
  });
});
