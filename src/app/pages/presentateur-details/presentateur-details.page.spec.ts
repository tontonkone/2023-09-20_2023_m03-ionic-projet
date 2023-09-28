import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentateurDetailsPage } from './presentateur-details.page';

describe('PresentateurDetailsPage', () => {
  let component: PresentateurDetailsPage;
  let fixture: ComponentFixture<PresentateurDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PresentateurDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
