import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Main } from "./components/main/main";
import { Projects } from "./components/projects/projects";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Main, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LP_Raycast');
}
