import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StudentsListComponent
  }
];

@NgModule({
  declarations: [StudentsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentsListModule { }
