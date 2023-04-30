import { Link } from "react-router-dom"


export const HeroCard = ( {id, superhero, publisher, alter_ego, first_appearance, characters}) => {

  const heroImageUrl = `/assets/heroes/${id}.jpg`
  
  return (
    

    <div className="col animate__animated animate__fadeIn">
      
      <div className="card text-bg-dark mb-3" style={{'maxWidth': '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ heroImageUrl } className="img-fluid rounded-start" alt={superhero}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> { superhero } </h5>
              <p className="card-text">{ alter_ego}</p>
              { alter_ego !== characters && <p className="card-text"  ><small className="">{characters}</small></p>}
              
              <p className="card-text">
                <small className="text-secondary">{ first_appearance }</small>
              </p>

              <Link to={`/hero/${id}`}>
                Mas ...
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
