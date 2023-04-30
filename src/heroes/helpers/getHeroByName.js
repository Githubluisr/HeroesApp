import { heroes  } from "../data/heroes";


export const getHeroByName = (name) => {

  if (name.toLocaleLowerCase().trim().length <= 0  ) return [];

  return heroes.filter( heroe => heroe.superhero.toLocaleLowerCase().includes(name))
  
}
