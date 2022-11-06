import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Privacy } from './privacy.component';

describe('Privacy', () => {
  let component: Privacy;
  let fixture: ComponentFixture<Privacy>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Privacy ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Privacy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
