
import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'


// const initialState = {
//   logged:false
// }

const init = () => {

  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,  // si no hay usuario regresa falso, caso contario verdadero
    user  // puede ser nulo o el usuario en si
  }
}

export const AuthProvider = ({children}) => {

  const [ authState, dispatch ] = useReducer(authReducer, {}, init )

  const login = ( name = '' ) => {

    const user = {
      id:'ABC',
      name
    }

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user))

    dispatch(action)
  }

  const logout = () => {

    localStorage.removeItem('user')

    const action = { type: types.logout }

    dispatch(action)
  }


  return (
    <AuthContext.Provider value = {{
      ...authState, //con esto exponemos a todos los que ven el context el valoe del estado
      login, //igualmente exponemos la funcion a todos los que leen del context
      logout
    }}>
      { children }
    </AuthContext.Provider>
      
    
  )
}
