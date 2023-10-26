// For Add Item to Cart
export const addCart = (product) =>{
    return {
        // type of action we need to perform
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        // data which need to be process
        payload:product
    }
}