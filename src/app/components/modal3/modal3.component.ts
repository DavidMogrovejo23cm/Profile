import { Component, OnInit, Input } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, 
  IonButtons, IonList, IonItem, IonLabel, IonRadioGroup, IonRadio,
  ModalController
} from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal3',
  templateUrl: './modal3.component.html',
  styleUrls: ['./modal3.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton, 
    IonButtons, IonList, IonItem, IonLabel, IonRadioGroup, IonRadio,
    CommonModule, FormsModule
  ]
})
export class Modal3Component implements OnInit {
  
  @Input() titulo: string = 'Selecciona una opción';
  @Input() opciones: string[] = [
    'Opción 1',
    'Opción 2',
    'Opción 3'
  ];
  
  opcionSeleccionada: string = '';

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    if (this.opciones.length > 0) {
      this.opcionSeleccionada = this.opciones[0];
    }
  }

  cerrar() {
    this.modalController.dismiss(null, 'cancel');
  }

  seleccionar() {
    this.modalController.dismiss({
      opcion: this.opcionSeleccionada
    }, 'confirm');
  }
}