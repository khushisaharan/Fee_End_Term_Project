const cart = []

const handleCart = (state=cart, action) =>{  //consist 2 parameter current state and action we need to take
    const product = action.payload
    switch(action.type){
        case "ADDITEM":
            // Check if product already in cart
            const exist = state.find((x) => x.id === product.id)
            if(exist){
                // Increase the quantity

                // ...x is used to create a copies of all properties of x into a new object

                return state.map((x)=>x.id ===product.id?{...x, qty: x.qty+1}:x)
            }
            else{
                return [...state, {...product, qty:1}]
            }
            break;
        case "DELITEM":
            const exist2 = state.find((x) => x.id === product.id)
            if(exist2.qty === 1){
                // filter method create a copy of new array but not include a item with id-exits2
                return state.filter((x)=>x.id!==exist2.id)
            }
            else{
                return state.map((x)=> x.id===product.id?{...x, qty:x.qty-1}:x)
            }
            break;

        default:
            return state
            break;
    }
}

export default handleCart