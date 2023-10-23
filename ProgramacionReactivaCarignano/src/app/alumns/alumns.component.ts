import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { IAlumn } from './models/alumn.model';
import { Observable, Subscription, of } from 'rxjs';
import { AlumnService } from './services/alumn.service';

@Component({
  selector: 'app-alumns',
  templateUrl: './alumns.component.html',
  styleUrls: ['./alumns.component.scss'],
})
export class AlumnsComponent implements OnDestroy, OnChanges {
  public alumns$: Observable<IAlumn[]> = of([]);
  public alumnsFromObservable: IAlumn[] = [];
  public alumnsFromPromise: IAlumn[] = [];
  public title: string = 'Pipe Async';
  private suscription!: Subscription;
  @Input() public useMethod!: string;

  constructor(private alumnService: AlumnService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const currentMethod = changes['useMethod'].currentValue;
    if (currentMethod === 'pipe') this.setPipeMethod();
    else if (currentMethod === 'promises') this.setPromiseMethod();
    else if (currentMethod === 'subscription') this.setSubscriptionMethod();
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  private setPipeMethod(): void {
    this.alumns$ = this.alumnService.getAlumns(1);
    this.alumnsFromPromise = [];
    this.alumnsFromObservable = [];
  }

  private setSubscriptionMethod(): void {
    this.suscription?.unsubscribe();
    this.suscription = this.alumnService.getAlumns(2).subscribe({
      next: (data) => (this.alumnsFromObservable = data),
    });
    this.alumns$ = of([]);
    this.alumnsFromPromise = [];
  }

  private setPromiseMethod(): void {
    this.alumnService.getAlumnsPromise().then((data) => {
      this.alumnsFromPromise = data;
    });
    this.alumns$ = of([]);
    this.alumnsFromObservable = [];
  }
}
