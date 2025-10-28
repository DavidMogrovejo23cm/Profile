import { Component, OnInit, Input } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, 
  IonButtons, IonInput, IonItem,
  ModalController
} from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true, 
  imports: [
    IonItem, IonInput, IonHeader, IonToolbar, IonTitle, 
    IonContent, IonButton, IonButtons, FormsModule
  ]
})
export class ModalComponent implements OnInit {
  
  @Input() nombre: string = '';
  @Input() email: string = '';
  @Input() telefono: string = '';

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalController.dismiss({
    }, 'confirm');
  }
}