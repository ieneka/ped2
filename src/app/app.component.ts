import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ped: string = 'Prueba de Evaluación a Distancia número 2'
  public title1: string = 'Tarea 1';
  public title2: string = 'Tarea 2';

  //NGMODEL
  public one: number = 0;
  public two: number = 0;

  constructor() { }

}
