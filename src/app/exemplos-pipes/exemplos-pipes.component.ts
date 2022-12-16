import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: [ './exemplos-pipes.component.scss' ],
})
export class ExemplosPipesComponent {
  livro: any = {
    title: 'Learning Javascript Data Structures and Algoritms',
    rate: 4.54321,
    pageNumber: 314,
    price: 44.99,
    releaseDate: new Date(2016, 5, 23),
    url: 'https://a.co/glqjpRP',
  };

  livros: Array<string> = [ 'PHP', 'Angular 2' ];

  filtro: string = '';

  addCurso(curso: any) {
    this.livros.push(curso.value);
    curso.value = '';
    curso.focus();
  }

  getCursos() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(livro => livro.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0);
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => (resolve('Valor assíncrono')), 2000);
  });
}
