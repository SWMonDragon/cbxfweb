import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshproductsComponent } from './freshproducts.component';

describe('FreshproductsComponent', () => {
  let component: FreshproductsComponent;
  let fixture: ComponentFixture<FreshproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
