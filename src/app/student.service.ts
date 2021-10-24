import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  
export class StudentService {
  // url:string='http://localhost:8000/api/v1/student/';
  url='https://api-student-backend.herokuapp.com/api/v1/student/';
  constructor(private http:HttpClient) { }

    fetchStudent(): Observable<Object>{
    return this.http.get(this.url);
    }





    deleteStudent(id): Observable<Object>{
      console.log("Deleting student with ID "+id);
      return this.http.delete(this.url +id);
    }



    createStudent(nam,rol): Observable<Object>{
      const newStudent = {
          name:nam,
          roll:rol
      };
      
      return this.http.post(this.url ,newStudent);
    }

    findstudent(method,param): Observable<Object>{
      return this.http.get(this.url+'find?method='+method+"&param="+param);
    }
  
    

   }

