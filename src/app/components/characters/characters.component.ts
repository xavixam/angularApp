import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character-interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characters',
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  public characters: Array<CharacterInterface> = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.results;
      },
      error: (error) => {
        console.error('Error fetching characters:', error);
      },
    });
  }
}
