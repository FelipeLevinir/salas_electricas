import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InstagramService } from 'src/app/services/instagram.service';
@Component({
  selector: 'app-redes-sociales',
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule],
  templateUrl: './redes-sociales.component.html',
  styleUrl: './redes-sociales.component.scss'
})
export class RedesSocialesComponent {
  
  informacionVisible = true;
  informacion: string = 'instagram';

  Instagramposts: any[] = [];

  constructor(private instagramService: InstagramService) {}

  mostrarInformacion(tipo: string) {
    this.informacion = tipo;
    this.informacionVisible = true;
  }

  ngOnInit(): void {
    this.instagramService.getRecentPosts().subscribe(
      (data) => {
        this.Instagramposts = data;
      },
      (error) => {
        console.error('Error al obtener los posts de Instagram', error);
      }
    );
  }
}