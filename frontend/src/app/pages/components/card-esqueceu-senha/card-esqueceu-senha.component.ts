import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-card-esqueceu-senha',
  templateUrl: './card-esqueceu-senha.component.html',
  styleUrls: ['./card-esqueceu-senha.component.css']
})
export class CardEsqueceuSenhaComponent implements OnInit{

  email:string = "sergiocardosodeveloper@gmail.com";

  constructor(private authService:AuthService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {

  }

  fazerLogin(){
    this.authService.recuperarSenha(this.email).subscribe(
        data => {
          this.exibirAlerta('Será enviado ao email cadastrado uma nova senha.');
          this.router.navigate(['/login']);
        },
        error => {
          this.exibirAlerta('Email incorreto ou não existe.');
        }
      );
  }

  exibirAlerta(mensagem: string) {
    alert(mensagem);
  }



}
