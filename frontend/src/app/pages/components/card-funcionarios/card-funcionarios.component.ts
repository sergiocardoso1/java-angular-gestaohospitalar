import { Component, OnInit } from '@angular/core';
import { funcionario } from 'src/app/models/funcionarioModel';
import { FuncionarioService } from 'src/app/services/funcionarioService/funcionario.service';

@Component({
  selector: 'app-card-funcionarios',
  templateUrl: './card-funcionarios.component.html',
  styleUrls: ['./card-funcionarios.component.css']
})
export class CardFuncionariosComponent implements OnInit{

  funcionarios: funcionario[] = [];
  nameInput:string = "";
  constructor(private funcionarioService:FuncionarioService){

    this.funcionarioService.findAll().subscribe(data => {
      this.funcionarios = data;
    })


  }

  findName(){
    if(this.nameInput != "" || this.nameInput.length > 0){
      this.funcionarioService.findName(this.nameInput).subscribe(data => {
        this.funcionarios = data;

      });
    }else{
      this.funcionarioService.findAll().subscribe(data => {
        this.funcionarios = data;
      })
    }

  }

  ngOnInit(): void {

  }



}
