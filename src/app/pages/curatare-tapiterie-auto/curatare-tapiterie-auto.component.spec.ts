import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratareTapiterieAutoComponent } from './curatare-tapiterie-auto.component';

describe('CuratareTapiterieAutoComponent', () => {
  let component: CuratareTapiterieAutoComponent;
  let fixture: ComponentFixture<CuratareTapiterieAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratareTapiterieAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratareTapiterieAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
