import React, { Fragment } from 'react'
import Producto from './Producto'


const Productos = (props) => {
    return (
        <Fragment>
            <div className="productos">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="title">{props.title}</h1>
                        </div>
                        <div className="col-6">
                            <Producto
                                title="PRODUCTO"
                                price={150}
                                addItemCart={props.addItemCart}
                                itemsCart={props.itemsCart}
                            />
                        </div>
                        <div className="col-6">
                            <Producto
                                title="PRODUCTO"
                                price="2000"
                                addItemCart={props.addItemCart}
                                itemsCart={props.itemsCart}
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Productos