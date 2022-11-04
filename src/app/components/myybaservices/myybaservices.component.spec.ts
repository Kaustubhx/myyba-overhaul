import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyybaservicesComponent } from './myybaservices.component';

describe('MyybaservicesComponent', () => {
  let component: MyybaservicesComponent;
  let fixture: ComponentFixture<MyybaservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyybaservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyybaservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
