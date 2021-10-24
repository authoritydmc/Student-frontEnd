import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FindStudentComponent} from './find-student/find-student.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {AppComponent} from './app.component';
import {AddStudentComponent} from './add-student/add-student.component';
import {FindAllComponent} from './find-all/find-all.component';
const routes: Routes = [
  {path:'edit',component: EditPageComponent},
  {path:'find',component:FindStudentComponent},
 
  { path: 'findAll', component: FindAllComponent },
  { path: 'add', component: AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
