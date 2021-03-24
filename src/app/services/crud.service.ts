import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireService: AngularFirestore) { }

  getAllCourses() {
    return this.fireService.collection('course').snapshotChanges();
  }
}
