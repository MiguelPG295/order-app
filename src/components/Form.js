import React, { useContext, useState } from 'react'
import { addProduct } from '../actions/control'
import { useForm } from '../hooks/useForm'
import { Context } from '../reducer/ModeContext'

export const Form = () => {

  const { dispatch, reducer } = useContext( Context )
  const [msg, setMsg] = useState( '' )

  const [ formValues, handleInputChange ] = useForm({
    sku:"",
    name:"",
    quantity:"",
    price:""
  })

  const { sku, name, quantity, price } = formValues

  const handelLogin = ( e ) => {
      const found = reducer.products.find(element => element.sku === sku )
      if ( found === undefined ) {
        dispatch( addProduct( { sku, name, quantity, price } ) )
        setMsg( '' )
      }else{
        setMsg( `El producto con el sku: ${ sku } ya existe` )
    }
      e.preventDefault()
  }

  return (
    <div className='containerFrom'>
      <h2>Agrega más productos</h2>
      <h4 className='error'>{ msg !== '' && msg }</h4>
        <form onSubmit={handelLogin}>
          <div className="inputBox">
              <input 
                type="number" 
                required 
                name="sku"
                onChange={ handleInputChange }
              />
              <label >SKU</label>
          </div>
          <div className="inputBox">
              <input 
                type="text"   
                required 
                name="name"
                onChange={ handleInputChange }
              />
              <label>Nombre</label>
          </div>
          <div className="inputBox">
              <input 
                type="number" 
                required 
                name="quantity"
                onChange={ handleInputChange }
              />
              <label >Cantidad</label>
          </div>
          <div className="inputBox">
              <input 
                type="number" 
                required 
                name="price"
                onChange={ handleInputChange }
              />
              <label >Precio</label>
          </div>
          <button type="submit">
            Agregar producto
          </button> 
        </form>
    </div>
  )
}
