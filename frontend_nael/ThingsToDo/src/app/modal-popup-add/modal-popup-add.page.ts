import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from '../models/task';
import { TaskService } from '../services/TaskService';

@Component({
  selector: 'app-modal-popup-add',
  templateUrl: './modal-popup-add.page.html',
  styleUrls: ['./modal-popup-add.page.scss'],
})
export class ModalPopupAddPage implements OnInit {
  taskName: any;
  taskDone: number;
  visible2: boolean;
  visible: boolean;
  taskDescription: any;

  constructor(
    private modalController: ModalController, private TaskService: TaskService
  ) { }

  ngOnInit() { }

  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

  post(){let send = 0;
    
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
      
      const task: Task = { id: null, name : this.taskName, description: this.taskDescription , done: this.taskDone };

      this.TaskService.createTask(task)
    
    }

    if(send != 2){
      this.visible=true;
      this.visible2 = false;
    }

  } 

}
