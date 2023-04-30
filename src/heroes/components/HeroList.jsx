import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers' 
import { HeroCard } from './HeroCard';

export const HeroList = ( {publisher} ) => {

  //usamos aqui un memo previniendo que si por alguna razon, arriba o sea en un padre, se actuializa el state
  //esta llamada se vuelve a hacer, lo cual no seria optimo
  const heroes = useMemo( ()=> getHeroesByPublisher(publisher), [publisher]); 
  

  return (

    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {
        heroes.map(heroe => 
          <HeroCard key= {heroe.id} {...heroe} />)
      }
    </div>

  )
}
