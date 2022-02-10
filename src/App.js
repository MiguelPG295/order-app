import React, { useReducer } from 'react'
import { Form } from './components/Form'
import { Order } from './components/Order'
import { Context } from './reducer/ModeContext'
import { Reducer } from './reducer/modeReducer'

export const App = () => {

  const [reducer, dispatch] = useReducer(Reducer, { products: [] })

  return (
    <Context.Provider value={ {reducer, dispatch} }>
      <Form/>
      <Order/>
    </Context.Provider>
  )
}

