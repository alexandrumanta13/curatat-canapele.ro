import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratareSalteleComponent } from './curatare-saltele.component';

describe('CuratareSalteleComponent', () => {
  let component: CuratareSalteleComponent;
  let fixture: ComponentFixture<CuratareSalteleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratareSalteleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratareSalteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
