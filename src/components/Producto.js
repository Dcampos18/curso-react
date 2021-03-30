import React, { Fragment } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Producto = (props) => {

    const addItem = () => {
        const items = props.itemsCart + 1
        props.addItemCart(items)
        console.log(items);
    }

    return (
        <Fragment>
            <div className="producto">
                <h1 className="title">{props.title}</h1>
                <h4 className="price">$ {props.price}</h4>
                <button 
                    className="btn btn-info"
                    type="button"
                    onClick={() => addItem() }
                >
                    Agregar al Carrito &nbsp;
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </Fragment>
    )
}


export default Producto