import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratareCanapeleComponent } from './curatare-canapele.component';

describe('CuratareCanapeleComponent', () => {
  let component: CuratareCanapeleComponent;
  let fixture: ComponentFixture<CuratareCanapeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratareCanapeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratareCanapeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
