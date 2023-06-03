import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'professor',
    loadChildren: () =>
      import('./modules/professor/professor.module').then( m => m.ProfessorModule)
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./modules/student/student.module').then( m => m.StudentModule)
  },
  {
    path: 'auth',
    loadChildren:  () => 
      import('./modules/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
