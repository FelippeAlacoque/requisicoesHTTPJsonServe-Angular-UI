import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PessoaService {

  constructor(private http: Http) { }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:3000/pessoas')
      .toPromise()
      .then(response => response.json());
  }

  adicionar(pessoa: any): Promise<any> {
    return this.http.post('http://localhost:3000/pessoas', pessoa)
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`http://localhost:3000/pessoas/${id}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(cidade: any): Promise<any> {
    return this.http.put(`http://localhost:3000/pessoas/${cidade.id}`, cidade)
      .toPromise()
      .then(response => response.json())
      .catch(erro => {
        return Promise.reject(`Erro ao alterar pessoa ${cidade.id}.`);
      });
  }

}
