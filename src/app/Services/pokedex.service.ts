import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor() {}
  async getPokemonById(id: number) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  }
  async getPokemons() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    return response.data;
  }
}
