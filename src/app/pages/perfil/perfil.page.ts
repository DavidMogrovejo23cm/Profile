import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonButtons, IonCardContent, IonCard, IonAvatar, IonCardTitle, IonItem, IonLabel, IonInput, IonChip, IonCardSubtitle, IonList, IonListHeader, IonToggle, IonCardHeader, IonFabButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonList, IonCardSubtitle, IonInput, IonLabel, IonItem, IonCardTitle, IonAvatar, IonCard, IonCardContent, IonButtons, IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink ]
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
