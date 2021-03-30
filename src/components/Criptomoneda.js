/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

import Loading from './Loading'

const Criptomoneda = () => {

    const [ loading, changeLoading ] = useState(true)
    const [ criptomonedas, guardarCriptomonedas ] = useState([])

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    
            const resultado = await axios.get(url)
            guardarCriptomonedas(resultado.data.Data)
            changeLoading(false)
        }
        consultarAPI()
    }, [])



    return (
        <Fragment>
            <div className="criptomonedas">
                <h3 className="titleCripto">Top 10 Criptomonedas</h3>
                {loading 
                    ? 
                        <Loading mensaje='Cargando'/> 
                    : 
                        <ol className="listCriptos">
                        {criptomonedas.map(cripto => (
                            <li><a href="#">{cripto.CoinInfo.FullName}</a></li>
                        ))}
                </ol>
                
                }
            </div>
        </Fragment>

    )
}

export default Criptomoneda
