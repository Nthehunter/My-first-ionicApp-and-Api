import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from "../models/task";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  endpoint: string = "http://localhost:8080/Task";

  constructor(private httpClient: HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.endpoint);
  }

  deleteTask(id: number): Observable<Task> {
    return this.httpClient.delete<Task>(this.endpoint + "/" + id)
  }

  updateTask(id: Number, task: Task) {

    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("Name", task.name);
    bodyEncoded.append("Description", task.description);
    bodyEncoded.append("Done", task.done.toString());

    
    const body = bodyEncoded.toString();

    console.log(body)

    this.httpClient.put<Task>(this.endpoint + '/' + id,  body , httpOptions).subscribe(() => {
      console.log("Task creada");
    });


  }

  createTask(task: Task) {

    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("Name", task.name);
    bodyEncoded.append("Description", task.description);
    bodyEncoded.append("Done", task.done.toString());

    
    const body = bodyEncoded.toString();

    console.log(body)

    this.httpClient.post<Task>(this.endpoint,  body , httpOptions).subscribe(() => {
      console.log("Task añadida");
    });


  }

  completedTask(id: Number){
 
    const done = 1;
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("Name", "");
    bodyEncoded.append("Description", "");
    bodyEncoded.append("Done", done.toString());
    const body = bodyEncoded.toString();

    console.log(body);
    this.httpClient.put<Task>(this.endpoint + '/' + id,  body , httpOptions).subscribe(() => {
      console.log("Task Hecha!");
    });
    
  }


}

