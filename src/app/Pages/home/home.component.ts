import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../Services/pokedex.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private pokedexService: PokedexService) {}
  index = -1;
  gradientColors = {
    grass:
      'linear-gradient( to right, rgb(152, 215, 165) 40%, rgb(120, 255, 147) 100% )',
    fire: 'linear-gradient( to right, rgb(255, 153, 153) 40%, rgb(255, 194, 153) 100% )',
    water:
      'linear-gradient( to right, rgb(176, 229, 253) 40%, rgb(153, 204, 255) 100% )',
    steel:
      'linear-gradient( to right, rgb(200, 200, 200) 40%, rgb(255, 255, 255) 100% )',
    dark: 'linear-gradient( to right, rgb(100, 100, 100) 40%, rgb(50, 50, 50) 100% )',
    bug: 'linear-gradient( to right, rgb(248, 213, 163) 40%, rgb(255, 255, 255) 100% )',
    poison:
      'linear-gradient( to right, rgb(185, 152, 215) 40%, rgb(233, 109, 255) 100% )',
    flying:
      'linear-gradient( to right, rgb(222, 243, 253) 40%, rgb(255, 255, 255) 100% )',
    normal:
      'linear-gradient( to right, rgb(245, 245, 245) 40%, rgb(200, 200, 200) 100% )',
    electric:
      'linear-gradient( to right, rgb(252, 247, 142) 40%, rgb(255, 246, 77) 100% )',
    ground:
      'linear-gradient( to right, rgb(182, 143, 105) 40%, rgb(107, 80, 53) 100% )',
    fairy:
      'linear-gradient( to right, rgb(109, 255, 141) 40%, rgb(79, 255, 240) 100% )',
    rock: 'linear-gradient( to right, rgb(213, 213, 212) 40%, rgb(107, 80, 53) 100% )',
    dragon:
      'linear-gradient( to right, rgb(151, 179, 230) 40%, rgb(79, 255, 240) 100% )',
    psychic:
      'linear-gradient( to right, rgb(234, 237, 161) 40%, rgb(253, 209, 127) 100% )',
    fighting:
      'linear-gradient( to right, rgb(199, 191, 175) 40%, rgb(243, 211, 152) 100% )',
    ghost:
      'linear-gradient( to right, rgb(87, 85, 74) 40%, rgb(125, 101, 192) 100% )',
    ice: 'linear-gradient( to right, rgb(85, 207, 245) 40%, rgb(153, 255, 255) 100% )',
    stellar:
      'linear-gradient( to right, rgb(137, 90, 227) 40%, rgb(119, 167, 255) 100% )',
    unknown: 'rgba(0, 0, 0, 0)',
  };
  primaryColors = {
    grass: 'rgb(152, 215, 165)',
    fire: 'rgb(255, 153, 153)',
    water: 'rgb(176, 229, 253)',
    steel: 'rgb(203, 203, 203)',
    dark: 'rgb(100, 100, 100)',
    bug: 'rgb(248, 213, 163)',
    poison: 'rgb(185, 152, 215)',
    flying: 'rgb(222, 243, 253)',
    normal: 'rgb(245, 245, 245)',
    electric: 'rgb(252, 247, 142)',
    ground: 'rgb(182, 143, 105)',
    fairy: 'rgb(233, 109, 255)',
    rock: 'rgb(213, 213, 212)',
    dragon: 'rgb(151, 179, 230)',
    psychic: 'rgb(234, 237, 161)',
    fighting: 'rgb(230, 224, 212)',
    ghost: 'rgb(226, 221, 193)',
    ice: 'rgb(85, 207, 245)',
    stellar: 'rgb(137, 90, 227)',
    unknown: 'rgba(0, 0, 0, 0)',
  };
  pokemons: any = [];

  ngOnInit(): void {
    this.getPokemons();
  }

  async getPokemons() {
    this.pokedexService.getPokemons(110).then(async (res) => {
      for (let i = 0; i < res.results.length; i++) {
        await this.pokedexService.getPokemonById(i + 1).then((response) => {
          let pokemon = {};
          switch (response.types[0].type.name) {
            case 'grass':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.grass,
                gradientColor: this.gradientColors.grass,
              };
              break;
            case 'fire':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.fire,
                gradientColor: this.gradientColors.fire,
              };
              break;
            case 'water':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.water,
                gradientColor: this.gradientColors.water,
              };
              break;
            case 'bug':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.bug,
                gradientColor: this.gradientColors.bug,
              };
              break;
            case 'poison':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.poison,
                gradientColor: this.gradientColors.poison,
              };
              break;
            case 'flying':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.flying,
                gradientColor: this.gradientColors.flying,
              };
              break;
            case 'normal':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.normal,
                gradientColor: this.gradientColors.normal,
              };
              break;
            case 'electric':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.electric,
                gradientColor: this.gradientColors.electric,
              };
              break;
            case 'ground':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.ground,
                gradientColor: this.gradientColors.ground,
              };
              break;
            case 'fairy':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.fairy,
                gradientColor: this.gradientColors.fairy,
              };
              break;
            case 'rock':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.rock,
                gradientColor: this.gradientColors.rock,
              };
              break;
            case 'dragon':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.dragon,
                gradientColor: this.gradientColors.dragon,
              };
              break;
            case 'psychic':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.psychic,
                gradientColor: this.gradientColors.psychic,
              };
              break;
            case 'fighting':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.fighting,
                gradientColor: this.gradientColors.fighting,
              };
              break;
            case 'ghost':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.ghost,
                gradientColor: this.gradientColors.ghost,
              };
              break;
            case 'ice':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.ice,
                gradientColor: this.gradientColors.ice,
              };
              break;
            case 'dark':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.dark,
                gradientColor: this.gradientColors.dark,
              };
              break;
            case 'steel':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.steel,
                gradientColor: this.gradientColors.steel,
              };
              break;
            case 'stellar':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.stellar,
                gradientColor: this.gradientColors.stellar,
              };
              break;
            case 'unknown':
              pokemon = {
                ...response,
                primaryColor: this.primaryColors.unknown,
                gradientColor: this.gradientColors.unknown,
              };
              break;
            default:
              break;
          }
          pokemon = {
            ...pokemon,
            sprite: response.sprites.front_default,
            anim: response.sprites.other.showdown.front_default
              ? response.sprites.other.showdown.front_default
              : response.sprites.front_default,
          };
          this.pokemons.push(pokemon);
        });
      }
    });
  }
  pokeEnter(i: number) {
    this.index = i;
  }
  pokeLeave() {
    this.index = -1;
  }
}
