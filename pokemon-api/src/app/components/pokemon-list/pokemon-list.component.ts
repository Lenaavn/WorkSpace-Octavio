import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{

  public pokemons: Pokemon[] = [];

  constructor(private PokemonService: PokemonService){}

  ngOnInit(): void {
      this.PokemonService.getPokemon().subscribe((data:any) => {
        console.log(data);
      })
  }

}
