import React, { Fragment } from 'react'

const Footer = ({date}) => {
    return (
        <Fragment>
            <div className="footer">
                <h1 className="date">Derechos Reservados GrowthBox S.A. de C.V. &copy; {date}</h1>
            </div>
        </Fragment>
    )
}

export default Footer