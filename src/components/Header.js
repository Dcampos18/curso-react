import React, { Fragment } from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Header = (props) => {
    return (
        <Fragment>
            <div className="header">
                <h1 className="title">{props.title}</h1>
                <div className="cart">
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white"/> <span className="counter">({props.itemsCart})</span>
                </div>
            </div>
        </Fragment>
    )
}


export default Header