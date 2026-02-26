import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Main } from "./components/main/main";
import { Projects } from "./components/projects/projects";
import { Esteira } from "./components/esteira/esteira";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Main, Projects, Esteira],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portifolio');
}
