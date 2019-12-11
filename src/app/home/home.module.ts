import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TestComponent } from '../test/test.component';
import { Content1Component } from './content1/content1.component';

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
      }
    ])
  ],
  declarations: [HomePage,TestComponent,Content1Component]
})
export class HomePageModule {}
