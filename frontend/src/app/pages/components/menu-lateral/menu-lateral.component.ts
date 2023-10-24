import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  constructor(private router: Router) {
    this.checkWindowSize();
  }

  logout() {
    // Remova o token de autorização do localStorage ou de qualquer outra forma de armazenamento
    localStorage.removeItem('token');


    // Redirecione o usuário para a página de login ou qualquer outra página desejada
    this.router.navigate(['/login']);
  }

  menuCollapsed: boolean = false;
  

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.menuCollapsed = window.innerWidth <= 800;
  }

  toggleMenu() {
    this.menuCollapsed = !this.menuCollapsed;
  }
}
