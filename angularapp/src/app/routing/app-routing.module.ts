// angularapp/src/app/routing/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentAddComponent } from '../student-add/student-add.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'add', component: StudentAddComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
  // Add more routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
