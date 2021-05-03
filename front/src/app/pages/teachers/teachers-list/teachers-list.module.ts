import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersListComponent } from './teachers-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: TeachersListComponent
  }
];

@NgModule({
  declarations: [
    TeachersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule
  ]
})
export class TeachersListModule { }
