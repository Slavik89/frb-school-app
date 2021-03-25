import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './admin/components/teachers/teachers.component'
import { StudentsComponent } from './admin/components/students/students.component'

const routes: Routes = [
  { path: 'teachers', component: TeachersComponent },
  { path: 'students', component: StudentsComponent }
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
