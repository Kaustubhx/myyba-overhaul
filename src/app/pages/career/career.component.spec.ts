import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Career } from './career.component';

describe('Career', () => {
  let component: Career;
  let fixture: ComponentFixture<Career>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Career ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Career);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
