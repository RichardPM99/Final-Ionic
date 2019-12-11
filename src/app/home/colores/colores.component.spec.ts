import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColoresComponent } from './colores.component';

describe('ColoresComponent', () => {
  let component: ColoresComponent;
  let fixture: ComponentFixture<ColoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
