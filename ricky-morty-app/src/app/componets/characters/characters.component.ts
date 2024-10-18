import { Component, OnInit } from '@angular/core';
import { CharactersService } from '@app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
 character = "";
  constructor(
    public characterService: CharactersService
  ) { }

  ngOnInit(): void {
    this.characterService.findCharacterById(5).subscribe(data => this.character);
  }

}
