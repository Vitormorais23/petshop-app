import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetcareComponent } from "./componentes/petcare/petcare.component";
import { LoginComponent } from "./componentes/login/login.component";
import { NgOptimizedImage } from '@angular/common';
import { CadastroClienteComponent } from './componentes/cadastro-cliente/cadastro-cliente.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, RouterOutlet,NgOptimizedImage, PetcareComponent, LoginComponent, CadastroClienteComponent, NgxMaskDirective, NgxMaskPipe]
})
export class AppComponent {
  title = 'petshop-app';
  public cpf2 = signal('000000000')
}
