import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public listCharacters: Character[] = [
    {
      name: 'Picoro',
      power: 1000,
    },
  ];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  OnDeleteCharacter(index?: string): void {
    if (!index) return;
    this.onDeleteId.emit(index);
  }
}
