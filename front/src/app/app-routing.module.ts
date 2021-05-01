import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'teachers',
    loadChildren: () => import('./pages/teachers/teachers.module').then(m => m.TeachersModule)
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
