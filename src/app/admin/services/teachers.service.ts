import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(public fireService: AngularFirestore) { }

  getTeachers() {
    return this.fireService.collection('teachers').snapshotChanges();
  }

  addTeacher(teacherInfo) {
    return this.fireService.collection('teachers').add(teacherInfo);
  }

  deleteTeacher(id) {
    return this.fireService.doc('teachers/' + id).delete();
  }
}
