import React, {useState} from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { CartAction } from '../../actions';
import items from '../../jsons/items.json';


const Cart = () => {
    const {cartList, cartCount} = useSelector(({CartReducer}) => CartReducer);
    const [list, setList] = useState(cartList);
    return(
        <div>
            {list.map((item, index) => (
                <div>{item.id}</div>
            ))}
        </div>
    )
}

export default Cart;