import React, { Fragment, useState } from 'react'

// Importamos nuestos CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Estructura.css'

// Importamos nuestros componentes
import Header from './Header'
import Navigation from './Navigation'
import Sidebar from './Sidebar'
import Principal from './Principal'
import Productos from './Productos'
import Footer from './Footer';
import Criptomoneda from './Criptomoneda'

const Estructura = () => {

    // Creamos una variable para obtener el año actual
    const date = new Date().getFullYear()
    // Mandamos a crear el state de Items del carrito
    const [itemsCart, addItemCart, deleteItemCart, updateItemCart] = useState(0)

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header
                            title="GROWTHBOX"
                            itemsCart={itemsCart}
                        />  
                    </div>
                    <div className="col-12">
                        <Navigation
                            title="NAVEGACIÓN"
                        />  
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 align-self-center">
                        <Sidebar
                            title="SIDEBAR"
                        />
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-12">
                                <Principal
                                    title="PRINCIPAL"
                                />
                            </div>
                            <div className="col-8">
                                <Productos
                                    title="PRODUCTOS"
                                    addItemCart={addItemCart}
                                    itemsCart={itemsCart}
                                    deleteItemCart={deleteItemCart}
                                    updateItemCart={updateItemCart}
                                /> 
                            </div>
                            <div className="col-4">
                                <Criptomoneda />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Footer
                            date={date}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Estructura