import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeachersService } from '../../../services/teachers.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss']
})
export class TeacherProfileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TeacherProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, public teachersServise: TeachersService ) { }

  ngOnInit(): void {
  }

  postTeacher(teacherInfo) {
    console.log(teacherInfo);
    this.teachersServise.addTeacher(teacherInfo).then(
      data => data
    ).catch(error => console.log(error));
    this.closeWindow();
  }

  closeWindow(): void {
    this.dialogRef.close();
  }

}
