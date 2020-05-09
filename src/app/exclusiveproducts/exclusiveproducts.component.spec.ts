import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveproductsComponent } from './exclusiveproducts.component';

describe('ExclusiveproductsComponent', () => {
  let component: ExclusiveproductsComponent;
  let fixture: ComponentFixture<ExclusiveproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusiveproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusiveproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
