import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskService } from '../services/TaskService';

import { Task } from '../models/task';


@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.page.html',
  styleUrls: ['./modal-popup.page.scss'],
})

export class ModalPopupPage implements OnInit {

  taskId:any;
  taskName:any;
  taskDescription:any;
  taskDone:any;
  visible:boolean;
  visible2:boolean;


  @Input() model_title: string;

  constructor(
    private modalController: ModalController, private TaskService: TaskService
  ) { }

  ngOnInit() { }

  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

 

  post(id: Number){let send = 0;
    
    
  
    
    if(this.taskName != null){
      send = send + 1;
    }

    if(this.taskDone >= 0 && this.taskDone <= 1){
      send = send + 1;
    }

    if(send == 2){
      console.log("todo okay")
      this.visible2=true;
      this.visible = false;
      
      const task: Task = { id: id, name : this.taskName, description: this.taskDescription , done: this.taskDone };

     
      this.TaskService.updateTask(id, task)
      
      
    }

    if(send != 2){
      this.visible=true;
      this.visible2 = false;
    }

    console.log(id)

  } 


}