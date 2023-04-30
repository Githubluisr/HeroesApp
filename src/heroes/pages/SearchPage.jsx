import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString  from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroByName } from "../helpers";

export const SearchPage = () => {

	const navigate = useNavigate();
	const location = useLocation();

	//query string regresa un objeto ocn una propiedad que es el query. Aqui se desestuctura y se le asigna un default:
	const { q = '' }  = queryString.parse(location.search)

	const heroes = getHeroByName(q);
	//console.log(heroes)


	const showSearchMessage = q.length === 0;
	const showNoHeroesMessage = q.length > 0 && heroes.length == 0;
	console.log(showSearchMessage)

	const { searchText, onInputChange } = useForm({
		searchText: q
	})

	
	const onHandleSubmit = (e) => {
		e.preventDefault();

		//if (searchText.trim().length <= 0) return; 

		navigate(`?q=${searchText}`)

	}

	return (
		<>
			<h1>Search Page</h1>
			<hr/>

			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>
					<hr/>

					<form onSubmit={ onHandleSubmit }>
						<input
							type="text"
							placeholder="Search a hero"
							className="form-control"
							name="searchText"
							autoComplete="off"
							value= { searchText } 
							onChange = { onInputChange } 
						/>

						<button className="btn btn-outline-primary mt-2">
							Search
						</button>
					</form>

				</div>

				<div className="col-7">
					<h4>Results</h4>
					<hr/>

					<div className="alert alert-primary" style={{display: showSearchMessage ? '': 'none'}}>
						Text a hero to search for ...
					</div>

					<div className="alert alert-danger" style={{display: showNoHeroesMessage ? '': 'none'}}>
						No hero with <b>{q}</b>
					</div>

					{
						heroes.map( hero => 
							<HeroCard key={hero.id} { ...hero } />
						)
					}

					{/* <HeroCard { .. heroeobjet}/> */}

				</div>
			</div>
			

		</>
	);
};
