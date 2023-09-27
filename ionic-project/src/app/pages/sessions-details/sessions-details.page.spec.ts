import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionsDetailsPage } from './sessions-details.page';

describe('SessionsDetailsPage', () => {
  let component: SessionsDetailsPage;
  let fixture: ComponentFixture<SessionsDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SessionsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
