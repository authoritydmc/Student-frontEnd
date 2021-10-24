import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
@Component({
  selector: 'app-find-student',
  templateUrl: './find-student.component.html',
  styleUrls: ['./find-student.component.css']
})
export class FindStudentComponent implements OnInit {

  student$;
  user = {
    name: '',
    roll: '',
  };

  trq=function()
  {
    alert("Called ");
  }
  constructor(private studentService: StudentService) {

  }
  ngOnInit() {
    this.student$ = this.studentService.fetchStudent();
  }

  find(method,params){
    console.log("finding method called "+method+" param "+params);
  }

}
