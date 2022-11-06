import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakedemoComponent } from './takedemo.component';

describe('TakedemoComponent', () => {
  let component: TakedemoComponent;
  let fixture: ComponentFixture<TakedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakedemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
