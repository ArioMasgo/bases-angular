import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class dbzService {
  public character: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000,
    },
    { id: uuid(), name: 'Vegeta', power: 7500 },
    { id: uuid(), name: 'Krillin', power: 500 },
  ];
  onNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.character.push(newCharacter);
  }
  //   onDeleteCharacter(index: number): void {
  //     this.character.splice(index, 1);
  //   }
  onDeleteCharacter(id: string): void {
    this.character = this.character.filter((character) => character.id !== id);
    console.log(this.character);
  }
}
