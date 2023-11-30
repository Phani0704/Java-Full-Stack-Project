// angularapp/src/app/models/student.model.ts

export interface Student {
  id?: number; // Optional, as it may be auto-generated or provided by the backend
  name: string;
  department: string;
  phonenumber: string;
}
