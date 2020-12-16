import React, { useState, useEffect } from 'react';
import items from '../../jsons/items.json';
import { CartAction } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import AddList from './AddList';
import './List.css';

const List = () => {
    const { cartList, cartCount } = useSelector(({CartReducer}) => CartReducer);

    return(
        <div>
            <div id="container">
                <div>cart list: {cartList}</div>
                <div>{cartCount}</div>
                <div className="listInner">
                    {
                        items.map((item) => (
                            <AddList item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default List;