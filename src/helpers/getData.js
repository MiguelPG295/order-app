let url = 'https://eshop-deve.herokuapp.com/api/v2/orders'

export const getOrders = async () => {

    try {
        const data = await fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajd ZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyD bMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
            }
        })

        const { orders }  = await data.json()

        return orders

    } catch (error) {
        throw new Error('Algo salio mal '+error)
    }
    // .then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response => console.log('Success:', response));
}

// export const getProducts = () => {
//     var url = 'https://eshop-deve.herokuapp.com/api/v2/orders'

//     fetch(url, {
//         method: 'GET',
//         headers:{
//             'Content-Type': 'application/json',
//             'Authorization': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajd ZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyD bMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
//         }
//     })
//     .then(res => res.json())
//     .catch(error => console.error('Error:', error))
//     .then(response => {
//         const { orders } = response
//         // console.log('Success:', orders)

//         const products = []
//         // orders.forEach(({ items }) => {
//         //     console.log(items)
//         //     products.concat(items)
//         // });
//         const p = orders.map(({ items }) => products.concat(items)).flat()
//         console.log(p)
//         return p
//     });
// }

export const getProducts = async ( id ) => {
    
    try {
        
            const data = await fetch(url, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajd ZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyD bMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
                }
            })
        
            const { orders }  = await data.json()
        
            // const products = []
            const products = orders[ id ]?.items
            // const p = orders.map(({ items }) => products.concat(items)).flat()

            return products
    } catch (error) {
        throw new Error('Algo salio mal '+ error)
    }
}