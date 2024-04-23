import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Contador: {{counter}}</h3>
        <button (click)="Incremento(1)" >+1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="Incremento(-1)" >-1</button>
    `
})

export class CounterComponent {
    public counter :number = 10;

  Incremento(value: number):void{
    this.counter+=value;
  } 
  reset():void{
    this.counter = 10;
  }


}