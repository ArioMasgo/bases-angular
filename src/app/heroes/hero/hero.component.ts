import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  
  public nombre:string = 'iron man';
  public edad:number = 35;
  // public anioNacimiento:number = 2024 - this.edad;
  get anioNacimiento():number{
    return 2024-this.edad;
  }
  get nameCapitalizado():string{
    return this.nombre.toUpperCase();
  }
  // public nameCapitalizado:string = this.nombre.toUpperCase();

  public cambiarNombre(name:string):void{
    this.nombre = name;
  }
  public cambiarEdad(edad:number):void{
    this.edad = edad;
  }
  public reset():void{
    this.nombre = 'iron man';
    this.edad = 35;
  }

}
