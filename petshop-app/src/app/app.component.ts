import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetcareComponent } from "./componentes/petcare/petcare.component";
import { LoginComponent } from "./componentes/login/login.component";
import { NgOptimizedImage } from '@angular/common';
import { CadastroClienteComponent } from './componentes/cadastro-cliente/cadastro-cliente.component';
import { HeaderComponent } from './componentes/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, RouterOutlet,NgOptimizedImage, PetcareComponent, LoginComponent, CadastroClienteComponent]
})
export class AppComponent {
  title = 'petshop-app';
}
