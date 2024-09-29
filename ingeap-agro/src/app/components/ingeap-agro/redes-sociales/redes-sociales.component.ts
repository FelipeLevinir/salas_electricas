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


  Instagramposts: any[] = [];

  constructor(private instagramService: InstagramService) {}

  getSizeClass(index: number): string {
    // Definir qué índices tendrán tamaño grande
    const largeIndices = [0, 3, 6, 9]; // Cambia esto según tus necesidades
    if (largeIndices.includes(index)) {
      return 'size-large';
    }
    // Puedes definir tamaños medios si lo deseas
    return 'size-small'; // Por defecto o para otros índices
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