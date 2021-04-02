import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../../services/teachers.service';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  firstName: string;
  lastName: string;

  displayedColumns: string[] = ['firstName', 'lastName', 'delete'];
  dataSource: any;

  constructor(public teachersServise: TeachersService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.teachersServise.getTeachers().subscribe(data => {
      this.dataSource = data.map(data => Object.assign(data.payload.doc.data(), {id: data.payload.doc.id}) );
    });
  }
  
  deleteTeacher(id) {
    this.teachersServise.deleteTeacher(id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TeacherProfileComponent, {
      width: '250 px',
      data: { firstName: this.firstName, lastName: this.lastName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }

}
