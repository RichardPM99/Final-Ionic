import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbecedarioComponent } from './abecedario.component';

describe('AbecedarioComponent', () => {
  let component: AbecedarioComponent;
  let fixture: ComponentFixture<AbecedarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbecedarioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbecedarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
