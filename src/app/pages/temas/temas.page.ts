import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class TemasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
