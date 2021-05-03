import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

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
    RouterModule.forChild(routes),
    NgxPaginationModule
  ]
})
export class StudentsListModule { }
