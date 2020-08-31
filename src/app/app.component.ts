import { Component } from '@angular/core';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pessoas = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.pessoaService.consultar()
      .then(dados => {
        this.pessoas = dados;
      })
  }

  adicionar(nome: string, telefone:string) {
    this.pessoaService.adicionar({ nome, telefone })
      .then(pessoa => {
        alert(`Pessoa "${pessoa.nome}" adicionada com código ${pessoa.id}!`);
        this.consultar();
      });
  }

  excluir(id: number) {
    this.pessoaService.excluir(id)
      .then(() => {
        alert('Pessoa excluída com sucesso!');
        this.consultar();
      });
  }

  atualizar(pessoa: any) {
    this.pessoaService.atualizar(pessoa)
      .then(() => {
        alert('Pessoa alterada com sucesso!');
      })
      .catch(erro => {
        alert(erro);
      })
  }
}
