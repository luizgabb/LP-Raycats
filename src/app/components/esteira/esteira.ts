import { Component } from '@angular/core';

@Component({
  selector: 'app-esteira',
  imports: [],
  templateUrl: './esteira.html',
  styleUrl: './esteira.scss',
})
export class Esteira {

  techs = [
    { nome: 'Angular', logo: 'assets/logos/angular.svg' },
    { nome: 'TypeScript', logo: 'assets/logos/typescript.svg' },
    { nome: 'Sass', logo: 'assets/logos/sass.svg' },
    { nome: 'Node.js', logo: 'assets/logos/node.svg' },
    { nome: 'Figma', logo: 'assets/logos/figma.svg' },
  ];
}
