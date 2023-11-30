// angularapp/src/app/student-add/student-add.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService
  ) {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      phonenumber: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const newStudent = this.addForm.value;
    this.studentService.createStudent(newStudent).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }

  ngOnInit(): void {}
}
