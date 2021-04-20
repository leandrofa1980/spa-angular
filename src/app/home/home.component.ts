import { Component, Input, OnInit } from '@angular/core';
import { devs } from '../model/devs';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela: boolean = false;

  listaDevs: devs[] = [
    {"id": 1,
    "name": "Ediane Araújo",
    "email": "ediane.araujo@example.com",
    "age": 66,
    "language": "Java"
    },
    {"id": 2,
    "name": "Nara Porto",
    "email": "nara.porto@example.com",
    "age": 70,
    "language": "JavaScript"
    },
    {"id": 3,
    "name": "Serafina da Cruz",
    "email": "serafina.dacruz@example.com",
    "age": 66,
    "language": "Python"
    },
    {"id": 4,
    "name": "Eliseu Castro",
    "email": "eliseu.castro@example.com",
    "age": 48,
    "language": "JavaScript"
    },
    {"id": 5,
    "name": "Luciara Cavalcante",
    "email": "luciara.cavalcante@example.com",
    "age": 66,
    "language": "Python"
    },
  ];

  displayedColumns: string[] = ['id', 'name', 'email', 'age', 'language'];  

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }
}
