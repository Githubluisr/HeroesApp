import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom"
import { getHeroById } from "../helpers";


export const HeroPage = () => {
  
  const { id } = useParams();

  //usamos aqui un memo previniendo que si por alguna razon, arriba o sea en un padre, se actuializa el state
  //esta llamada se vuelve a hacer, lo cual no seria optimo
  const hero = useMemo(() => getHeroById(id) , [ id ]); 

  const navigate = useNavigate();

  const onHandleClick = () => {
    
    //Lo tenia asi, pero siempre regresa al home. Como ahora puede venir tambien ya sea del home o del search, mejor mandamos -1
    // que indica "vete al historial menos una entrada"  :
    //navigate('/', {replace:true })
    navigate(-1)

  }
  
  //como JS es secuencial, podemos "interceptar" la renderizacion con esta validacion:
  if ( !hero ) return <Navigate to='/marvel' />

  
  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img 
          src={`/assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft">
        </img>
      </div>

      <div className='col-8'>
        <h3 className='animate__animated animate__bounceInDown'>{hero.superhero}</h3>

        <ul>
          <li className="list-gropu-item mt-4"><b>Alter ego: </b>{hero.alter_ego}</li>
          <li className="list-gropu-item mt-1"><b>Publisher: </b>{hero.publisher}</li>
          <li className="list-gropu-item mt-1"><b>First appearance: </b>{hero.first_appearance}</li>

        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button 
          className='btn btn-primary'
          onClick={ onHandleClick }
        >
          Back
        </button>
      </div>

    </div>
  )
}
