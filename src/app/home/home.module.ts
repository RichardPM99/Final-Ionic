import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { Content1Component } from './content1/content1.component';
import { TestComponent } from './test/test.component';
import { ColoresComponent } from './colores/colores.component';
import { AbecedarioComponent } from './abecedario/abecedario.component';
import { NumerosComponent } from './numeros/numeros.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'content1',
        component: Content1Component
      },
      {
        path: 'colores',
        component: ColoresComponent
      },
      {
        path: 'abecedario',
        component: AbecedarioComponent
      },
      {
        path: 'numeros',
        component: NumerosComponent
      }
    ])
  ],
  declarations: [HomePage,TestComponent,Content1Component,ColoresComponent,AbecedarioComponent,NumerosComponent]
})
export class HomePageModule {}
