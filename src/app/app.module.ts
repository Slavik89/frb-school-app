import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { TeachersComponent } from './admin/components/teachers/teachers.component';
import { StudentsComponent } from './admin/components/students/students.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminPanelComponent } from './admin/components/admin-panel/admin-panel.component'
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TeacherProfileComponent } from './admin/components/teachers/teacher-profile/teacher-profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    StudentsComponent,
    AdminPanelComponent,
    TeacherProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule
  ],
  entryComponents: [TeacherProfileComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
