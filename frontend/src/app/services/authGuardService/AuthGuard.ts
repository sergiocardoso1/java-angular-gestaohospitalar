import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    // Verifique se o usuário está logado, por exemplo, verificando a presença do token de autorização no localStorage
    const token = localStorage.getItem('token');
    const isLogged = token !== null;

    if (isLogged) {
      // Se o usuário estiver logado, permita o acesso à rota
      return true;
    } else {
      // Se o usuário não estiver logado, redirecione para a página de login
      return this.router.createUrlTree(['/login']);
    }
  }
}
