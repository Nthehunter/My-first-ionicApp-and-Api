import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../models/task';
import { TaskService } from '../services/TaskService';
import { ModalPopupPage } from '../modal-popup/modal-popup.page';
import { ModalPopupAddPage } from '../modal-popup-add/modal-popup-add.page'; 
import { ModalController } from '@ionic/angular';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{


  modelData: any;
  modelDataAdd: any;

  async openIonModal(id: number, name: String, description: string, done: number) {
    console.log(description);
    const modal = await this.modalController.create({
      component: ModalPopupPage,
      componentProps: {
        "Id" : id,
        'Nombre': name,
        'Description': description,
        'Done': done
      }
      
    });

    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });

    return await modal.present();
  }


  async openIonModalAdd() {
    
    console.log("Entra"); 
    const modalAdd = await this.modalControllerAdd.create({
      component: ModalPopupAddPage
    });

    modalAdd.onDidDismiss().then((modelData) => {
      if (this.modelDataAdd !== null) {
        this.modelDataAdd = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });

    return await modalAdd.present();

  }


  public task: Array<Task> = [];
  public myTask: Task;

  constructor(private router: Router, private TaskService: TaskService, public modalController: ModalController, public modalControllerAdd: ModalController ) {}

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo(){
    this.TaskService.getTask().subscribe((t: Array<Task>) => {
      this.task = t;
    })
 
  }

  deleteTask(id: number){
    this.TaskService.deleteTask(id).subscribe(() =>
    this.loadInfo()
    
    );
  
  }

  completedTask(id:number){
    this.TaskService.completedTask(id);
    this.loadInfo();
  }
  

}
