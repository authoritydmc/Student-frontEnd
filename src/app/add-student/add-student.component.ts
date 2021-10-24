import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student$;
  user = {
    name: '',
    roll: '',
  };


  constructor(private studentService: StudentService) {

  }

  editStudent(id)
  {

  }

  deleteStudent(id) {
    /*
    Complete this function to delete student and upon deletion of existing student based on the id of the student, 
    It should prompt for a comfirmation for deletion and 
    the updated list should be reflected in the UI
    */
   console.log("Delete student Called");
    const res=this.studentService.findstudent("id",id);
    console.log(res);
    res.subscribe(student=>{
      console.log(student);
      if(student.hasOwnProperty("success"))
      {
        if
        (student["success"]==true)
        {//found now delete

         var ans= confirm("Do you really want to delete Student with ID "+student["student"]["id"]+"?");
          
       if(ans)  {this.studentService.deleteStudent(student["student"]["id"]).subscribe(res=>{
console.log("Deleting result->"+JSON.stringify(res));
this.student$ = this.studentService.fetchStudent();

       });
        }
        }
        
      }

    })
    


  }

  createStudent(name, roll) {
    /*
    Complete this function to create new student taking parameters as name and roll
    and upon addition of new student, he should be reflected in the UI
    */
   console.log("Creating student called "+name+roll);
    this.studentService.createStudent(name,roll).subscribe(res=>{
      console.log("Output->"+JSON.stringify(res));
      this.student$ = this.studentService.fetchStudent();

    });
  }


  ngOnInit() {

    this.student$ = this.studentService.fetchStudent();


  }

}
