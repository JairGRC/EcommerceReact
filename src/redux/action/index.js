// Para agregar items al carrito de compras
export const addCart = (product)=>{
    return{
        type:"ADDITEM",
        payload: product
    }
}

// para eliminar del carrito de compras

export const delCart=(product)=>{
    return {
        type:"DELITEM",
        payload:product
    }
}