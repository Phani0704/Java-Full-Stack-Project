// student.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:8081'; // Replace with the correct base URL of your backend server

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/getAllStudent`);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/getById/${id}`);
  }

  createStudent(student: Student): Observable<any> {
    return this.http.post(`${this.baseUrl}/addStudent`, student);
  }

  // You can add other service methods as needed
}
