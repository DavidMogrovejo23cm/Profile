import { Component, OnInit, Input } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, 
  IonButtons, IonIcon, IonText,
  ModalController
} from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton, 
    IonButtons, IonIcon, IonText, CommonModule
  ]
})
export class Modal2Component implements OnInit {
  
  @Input() titulo: string = 'Confirmar Acción';
  @Input() mensaje: string = '¿Estás seguro de que deseas continuar?';
  @Input() iconName: string = 'warning-outline';

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  cancelar() {
    this.modalController.dismiss(null, 'cancel');
  }

  confirmar() {
    this.modalController.dismiss({ confirmado: true }, 'confirm');
  }
}