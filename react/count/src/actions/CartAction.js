const ADDCART = 'ADDCART';
const DELETECART = 'DELETECART';

const onAddCart = (name) => ({type: ADDCART, name: name});
const onDeleteCart = (name) => ({type: DELETECART, name: name});

export default{
    ADDCART, DELETECART,
    onAddCart, onDeleteCart
}
