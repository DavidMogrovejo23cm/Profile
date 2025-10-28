import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, 
  IonButton, IonButtons, IonCardContent, IonCard, IonAvatar, 
  IonCardTitle, IonItem, IonLabel, IonInput, IonCardSubtitle,
  ModalController, IonModal } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Modal2Component } from 'src/app/components/modal2/modal2.component';
import { Modal3Component } from 'src/app/components/modal3/modal3.component';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonModal, 
    IonCardSubtitle, IonInput, IonLabel, IonItem, IonCardTitle, 
    IonAvatar, IonCard, IonCardContent, IonButtons, IonButton, 
    IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, RouterLink
  ]
})
export class PerfilPage implements OnInit {
  
  nombre: string = "David Mogrovejo";
  email: string = "Dagumomogrovejo@gmail.com";
  telefono: string = "0987576162";
  mensaje: string = "";

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  // Modal 1 - Editar información
  async modal() {
    const modal = await this.modalController.create({
      component: ModalComponent, 
      componentProps: {
        nombre: this.nombre,
        email: this.email,
        telefono: this.telefono
      }
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    
    if (role === 'confirm' && data) {
      console.log('Datos actualizados:', data);
    }
  }

  // Modal 2 - Confirmación (por ejemplo, cerrar sesión)
  async modal2() {
    const modal = await this.modalController.create({
      component: Modal2Component,
      componentProps: {
        titulo: 'Cerrar Sesión',
        mensaje: '¿Estás seguro de que deseas cerrar sesión?',
        iconName: 'log-out-outline'
      }
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    
    if (role === 'confirm') {
      console.log('Usuario confirmó cerrar sesión');
      this.mensaje = "Sesión cerrada";
    }
  }

  // Modal 3 - Selección de opciones (por ejemplo, cambiar tema)
  async modal3() {
    const modal = await this.modalController.create({
      component: Modal3Component,
      componentProps: {
        titulo: 'Selecciona un Tema',
        opciones: [
          'Tema Claro',
          'Tema Oscuro',
          'Tema Automático'
        ]
      }
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    
    if (role === 'confirm' && data) {
      console.log('Opción seleccionada:', data.opcion);
      this.mensaje = `Tema seleccionado: ${data.opcion}`;
    }
  }
}