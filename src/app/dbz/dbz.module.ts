import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, CharacterComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
