import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthDialogComponent } from './user-auth-dialog.component';

describe('UserAuthDialogComponent', () => {
  let component: UserAuthDialogComponent;
  let fixture: ComponentFixture<UserAuthDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAuthDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
