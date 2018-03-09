import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastsManager, ToastOptions } from 'ng2-toastr';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [AuthService, ToastsManager, ToastOptions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not log user in', () => {
    sessionStorage.clear();
    component.login = "waldemar";
    component.password = "abc";
    component.logIn();
    const user = sessionStorage.getItem('currentUser');
    expect(user).toBeNull();
  });

  it('should log user in', () => {
    sessionStorage.clear();
    component.login = "waldemar";
    component.password = "3aB8Cd72";
    component.logIn();
    const user = sessionStorage.getItem('currentUser');
    expect(user).toContain('username');
  });

});
