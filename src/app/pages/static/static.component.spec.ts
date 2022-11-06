import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Terms } from './static.component';

describe('Terms', () => {
  let component: Terms;
  let fixture: ComponentFixture<Terms>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Terms ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Terms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
