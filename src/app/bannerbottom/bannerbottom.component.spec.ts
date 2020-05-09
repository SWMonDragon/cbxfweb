import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerbottomComponent } from './bannerbottom.component';

describe('BannerbottomComponent', () => {
  let component: BannerbottomComponent;
  let fixture: ComponentFixture<BannerbottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerbottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
