import { ListItemAvatar } from "@material-ui/core";

export const productReducer=(state={product:[], cart:[]}, action)=>{
    if(action.type=== "ADD_DATA" ) {
        
        return{
            ...state,
            product: [...action.data],
    };
}
    if(action.type=== "ADD_TO_CART" ) {
        console.log('item----',action.data)
            return{
            ...state,
            cart: [action.data, ...state.cart],
        };
    } 
    if(action.type=== "SELECTED_PROD_ID"){
        return{
            ...state,
            selectedid: action.data,
        }
    }  
    if(action.type=== "REMOVE_PRODUCT"){
       
        state.product.pop();
        return{
            product: [...state.product],
        }
        
    }
    return state;
    }
    
    
    