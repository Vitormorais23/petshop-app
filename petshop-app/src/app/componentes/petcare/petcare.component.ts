import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AgendaComponent } from '../agenda/agenda.component';

@Component({
  selector: 'app-petcare',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink],
  templateUrl: './petcare.component.html',
  styleUrl: './petcare.component.css'
})
export class PetcareComponent {

}
