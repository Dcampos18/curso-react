import React, { Fragment } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'



const Producto = ({title, price, itemsCart, addItemCart}) => {
    const addItem = () => {
        const items = itemsCart + 1
        addItemCart(items)
        console.log(items);
    }

    const deleteItem = () => {
        if(itemsCart > 0){
            const items = itemsCart - 1
            addItemCart(items)
            console.log(items);
        }
        else{
            console.log("Carrito Vacio");
        }
        
    }
    return (
        <Fragment>
            <div className="producto">
                <h1 className="title">{title}</h1>
                <h4 className="price">$ {price}</h4>
                <button 
                    className="btn btn-info"
                    type="button"
                    onClick={() => addItem() }
                >
                    Agregar al Carrito &nbsp;
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <br/>
                <button 
                    className="btn btn-danger"
                    type="button"
                    onClick={() => deleteItem() }
                >
                    Eliminar del Carrito &nbsp;
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </Fragment>
    )
}


export default Producto