import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
	return (
		<>
			<Routes>
				{/* <Route path="login" element={<LoginPage />} /> */}

				{/* Proteccion de rutas. Rutas publicas (no esta logeado) */}
				<Route path='login' element = {
					<PublicRoute>
						<LoginPage />
					</PublicRoute>
				}/>

				{/* Proteccion de rutas. Rutas privadas (Tiene que estar logeado) */}
				<Route path='/*' element = {
					<PrivateRoute>
						<HeroesRoutes/>
					</PrivateRoute>
				} />


			</Routes>
		</>
	);
};
