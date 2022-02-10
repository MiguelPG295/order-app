import React, { useContext, useEffect, useState } from 'react'
import { changeQuantity, loadProducts } from '../actions/control'
import { getOrders, getProducts } from '../helpers/getData'
import { Context } from '../reducer/ModeContext'

export const Order = () => {
    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState( 0 )

    const { reducer, dispatch } = useContext( Context )
    const { products } = reducer
    
    useEffect(() => {
        const getData = async () => {
            const data = await getOrders()
            const p = await getProducts( 0 )
            dispatch( loadProducts( p ) )
        setOrders( data )
      }
      
      getData()
    }, [ dispatch ])

    useEffect(() => {
        const getData = async () => {
            const p = await getProducts( order )
            dispatch( loadProducts( p ) )
      }
      
      getData()
    }, [ order, dispatch ])

    const changeOrder = ( newOrder ) => {
        if ( newOrder >= 0 && newOrder < orders.length ) {
            setOrder( newOrder )   
        }        
    }

    const increaseQuantity = ( quantity, id ) => {
        dispatch( changeQuantity( quantity, id ) )
    }
    
    const decreaseQuantity = ( quantity, id ) => {
        dispatch( changeQuantity( quantity, id ) )
    }
    
    

    return (
        <div className='containerOrder'>
            <div className='changeOrderRow rowL' onClick={ () => changeOrder( order - 1 ) } ><ion-icon name="arrow-back-outline"></ion-icon></div>
            <div className='changeOrderRow rowR' onClick={ () => changeOrder( order + 1 ) } ><ion-icon name="arrow-forward-outline"></ion-icon></div>
            <header>
                <h2>
                    Orden <label>{ orders[ order ]?.number }</label>
                </h2>
                <p>{ orders[ order ]?.dates.createdAt.substr(0, 10) }</p>
            </header>
            {/* {console.log(orders[0])} */}
            <section className='personalBox'>
                <div>
                    <label>Nombre:</label>
                    <h4>{ orders[ order ]?.billingAddress.firstName } { orders[ order ]?.billingAddress.lastName }</h4>
                </div>
                <div>
                    <label>Telefono:</label> 
                    <h4>{ orders[ order ]?.billingAddress.phone }</h4>
                </div>
                <div>
                    <span>
                        <label>País:</label>
                        <h4>{ orders[ order ]?.billingAddress.country.name }</h4>
                    </span>
                    <span>
                        <label>Ciudad:</label>
                        <h4>{ orders[ order ]?.billingAddress.city }</h4>
                    </span>
                    <span>
                        <label>Dirección:</label>
                        <h4>{ orders[ order ]?.billingAddress.address1 }</h4>
                    </span>
                    <span>
                        <label>CP:</label>
                        <h4>{ orders[ order ]?.billingAddress.postalCode.trim() }</h4>
                    </span>
                </div>
                <div>
                    <label>Email: </label> 
                    <h4>{ orders[ order ]?.billingAddress.email ?  orders[ order ]?.billingAddress.email : 'Sin email' }</h4>
                </div>
            </section>
            <section className='productsCarBox'>
                {
                    products?.map(( product, index ) => (
                        <div className='productCard' key={ index }>
                            <div className='imgProductBox'>
                                <img src={ `https://picsum.photos/${ index }00/${ index }00` } alt="" /> 
                                <p>Sku: { product.sku ? product.sku : 'Sin sku' }</p>
                            </div>
                            <h3>Producto: { product.name }</h3>
                            <span>
                                <h4>{ parseFloat( product.price ) }.00 MXN</h4>
                                <div>
                                    <button onClick={ () => decreaseQuantity( parseInt( product.quantity  ) - 1, index ) }>-</button>
                                    <p>Cantidad: { product.quantity }</p>
                                    <button onClick={ () => increaseQuantity( parseInt( product.quantity  ) + 1, index ) }>+</button>
                                </div>
                            </span>
                        </div>
                    ))
                }
                <div>

                </div>
            </section>
        </div>
    )
}
