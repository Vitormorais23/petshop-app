import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  agenda = [
    {
      date: 'xx/xx',
      items: [
        { type: 'Banho e tosa', date: 'xx/xx', time: '08:00', location: 'Animal/home' },
        { type: 'Banho e tosa', date: 'xx/xx', time: '10:00', location: 'Animal/home' },
        { type: 'Banho e tosa', date: 'xx/xx', time: '14:00', location: 'Animal/home' },
        { type: 'Banho e tosa', date: 'xx/xx', time: '17:30', location: 'Animal/home' }
      ]
    },
    // Adicione mais objetos de agenda conforme necessário
  ];
}

