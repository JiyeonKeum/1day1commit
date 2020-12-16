import { CartAction } from '../actions';

const initialState = {
    cartList: [],
    cartCount: 0
}

const CartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartAction.ADDCART: {
            if(state.cartList.indexOf(action.name) === -1){ //item 으로 바꿔보자 수량까지 체크박스  임머
                return {
                    ...state,
                    cartList: [...state.cartList, action.name],
                    cartCount: state.cartCount + 1
                };
            }
            else{
                return {
                    cartList: state.cartList,
                    cartCount: state.cartCount
                }
            }
            
        }
        case CartAction.DELETECART: {
            if(state.cartList.indexOf(action.name) !== -1) {
                return {
                    ...state,
                    cartList: state.cartList.filter(item => (item !== action.name)),
                    cartCount: state.cartCount - 1
                }
            }
            else {
                return {
                    cartList: state.cartList,
                    cartCount: state.cartCount
                }
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default CartReducer;