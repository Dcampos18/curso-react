import React, { Fragment } from 'react'

const Sidebar = (props) => {
    return (
        <Fragment>
            <div className="sidebar">
                <h1 className="title">{props.title}</h1>
            </div>
        </Fragment>
    )
}


export default Sidebar