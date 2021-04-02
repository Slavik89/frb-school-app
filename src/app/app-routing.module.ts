import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './admin/components/teachers/teachers.component'
import { StudentsComponent } from './admin/components/students/students.component'
import { AdminPanelComponent } from './admin/components/admin-panel/admin-panel.component';

const routes: Routes = [
  { path: 'teachers', component: TeachersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'main', component: AdminPanelComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
