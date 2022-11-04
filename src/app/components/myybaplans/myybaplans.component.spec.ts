import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyybaplansComponent } from './myybaplans.component';

describe('MyybaplansComponent', () => {
  let component: MyybaplansComponent;
  let fixture: ComponentFixture<MyybaplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyybaplansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyybaplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
