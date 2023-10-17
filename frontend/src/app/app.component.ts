import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CliLife';
  isLoginPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkIfLoginPage();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkIfLoginPage();
      }
    });
  }

  private checkIfLoginPage() {
    this.isLoginPage = this.router.url === '/login' || this.router.url === '/recuperarsenha';
  }


}
