import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesspartnersComponent } from './bussinesspartners.component';

describe('BussinesspartnersComponent', () => {
  let component: BussinesspartnersComponent;
  let fixture: ComponentFixture<BussinesspartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinesspartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinesspartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
