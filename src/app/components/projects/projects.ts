import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  public ProjectActive: number | null = null;

  OneProject(): any {
    this.ProjectActive = 1;
  }
  TwoProject(): any {
    this.ProjectActive = 2;
  }
  TreeProject(): any{
    this.ProjectActive = 3
  }
}
