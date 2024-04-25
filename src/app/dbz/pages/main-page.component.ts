import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzServiceMain: dbzService) {}

  public get Character(): Character[] {
    return [...this.dbzServiceMain.character];
  }
  onDeletedCharacter(id: string): void {
    this.dbzServiceMain.onDeleteCharacter(id);
  }
  onNewCharacter(character: Character): void {
    this.dbzServiceMain.onNewCharacter(character);
  }
}
