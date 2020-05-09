import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperfoodsComponent } from './superfoods.component';

describe('SuperfoodsComponent', () => {
  let component: SuperfoodsComponent;
  let fixture: ComponentFixture<SuperfoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperfoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
