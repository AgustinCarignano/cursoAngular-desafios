import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Cuarto desafio entregable';
  public showSidebar = true;
  public method: string = 'pipe';

  public toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

  public setMethod(v: string): void {
    this.method = v;
  }
}
