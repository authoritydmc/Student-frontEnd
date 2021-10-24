import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentService} from './student.service';
import {FormsModule} from "@angular/forms";
import { EditPageComponent } from './edit-page/edit-page.component';
import { FindStudentComponent } from './find-student/find-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FindAllComponent } from './find-all/find-all.component';

@NgModule({
  declarations: [
    AppComponent,
    EditPageComponent,
    FindStudentComponent,
    AddStudentComponent,
    FindAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
