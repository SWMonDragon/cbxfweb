import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutavocadoComponent } from './aboutavocado.component';

describe('AboutavocadoComponent', () => {
  let component: AboutavocadoComponent;
  let fixture: ComponentFixture<AboutavocadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutavocadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutavocadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
