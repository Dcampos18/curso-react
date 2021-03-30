import React, { Fragment } from 'react'

const Principal = (props) => {
    return (
        <Fragment>
            <div className="principal">
                <h1 className="title">{props.title}</h1>
            </div>
        </Fragment>
    )
}


export default Principal