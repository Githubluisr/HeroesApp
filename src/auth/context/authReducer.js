import { types } from "../types/types";



export const authReducer = (state = {} , action) => {

switch (action.type) {
  case types.login:

    return {
      ...state,  // esto es solo para el caso de que en un futuro vengan mas propiedades en el estado.
      logged: true,
      user: action.payload
    }
    
  case types.logout:

    // yo haba pensado en borrar el user:null y hasta regresarl el ...state. El no lo hizo asi y tiene algo de logica. entiendo que realmente esta planchando 
    //toda la info y regresa solo logged false
    return { 
      logged: false,
    };

  default:
    return state;
}



}

