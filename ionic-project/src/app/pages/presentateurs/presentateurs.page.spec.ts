import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentateursPage } from './presentateurs.page';

describe('PresentateursPage', () => {
  let component: PresentateursPage;
  let fixture: ComponentFixture<PresentateursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PresentateursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
