import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Poster } from './poster.component';

describe('Poster', () => {
  let component: Poster;
  let fixture: ComponentFixture<Poster>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poster ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Poster);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
