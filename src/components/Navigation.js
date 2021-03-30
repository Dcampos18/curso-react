import React, { Fragment } from 'react'

const Navigation = (props) => {
    return (
        <Fragment>
            <div className="navigation">
                <h1 className="title">{props.title}</h1>
            </div>
        </Fragment>
    )
}


export default Navigation