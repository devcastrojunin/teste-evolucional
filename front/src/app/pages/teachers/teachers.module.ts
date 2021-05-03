import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'todos',
        loadChildren: () => import('./teachers-list/teachers-list.module').then(m => m.TeachersListModule)
      },
      {
        path: 'editar/:id',
        loadChildren: () => import('./teachers-edit/teachers-edit.module').then(m => m.TeachersEditModule)
      },
      {
        path: 'cadastrar',
        loadChildren: () => import('./teacher-register/teacher-register.module').then(m => m.TeacherRegisterModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TeachersModule { }
