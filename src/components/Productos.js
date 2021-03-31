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
                                title="PC HUAWEI"
                                price={15000}
                                addItemCart={props.addItemCart}
                                itemsCart={props.itemsCart}
                                deleteItemCart={props.deleteItemCart}
                                updateItemCart={props.updateItemCart}
                            />
                        </div>
                        <div className="col-6">
                            <Producto
                                title="NOKIA S8"
                                price="2000"
                                addItemCart={props.addItemCart}
                                itemsCart={props.itemsCart}
                                deleteItemCart={props.deleteItemCart}
                                updateItemCart={props.updateItemCart}
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Productos