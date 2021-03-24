import { Component } from '@angular/core';
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'frb-school-app';
  courseName: any;

  constructor(public crudServise: CrudService) {}

  ngOnInit() {
    this.crudServise.getAllCourses().subscribe(data => {
      this.courseName = data.map(data => data.payload.doc.data()['courseName']);
      console.log(this.courseName);
    });
  }
}
