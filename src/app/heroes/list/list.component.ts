import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[] =['Spiderman', 'Thor', 'Hulk', 'Cap America','Atman', 'Black Panter', 'Black Widow'];
  public heroEliminado?:string;
  deleteEndheroe():void{
     this.heroEliminado=this.heroNames.pop();
  }
}
