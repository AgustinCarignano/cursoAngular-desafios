import { Component } from '@angular/core';
import { alumnsData } from './data/alumns.data';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent {
  public alumns = alumnsData;
  private readonly eighteenYears = 3600 * 1000 * 24 * 365.25 * 18;
  private dateForOlder = new Date().getTime() - this.eighteenYears;

  public isOlder(fechaNacimiento: number): boolean {
    return fechaNacimiento < this.dateForOlder;
  }

  public getClass(fechaNacimiento: number) {
    return fechaNacimiento > this.dateForOlder ? 'younger' : 'older';
  }
}
