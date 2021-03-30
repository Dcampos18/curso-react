import React from 'react'
import styled from '@emotion/styled'

const MensajeCargando = styled.p({
    padding: "1rem",
    color: "#FFF",
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Bebas Neue" && "cursive",
    width: "100%",
})

const Loading = ({mensaje}) => {
    return (
        <MensajeCargando>{mensaje}</MensajeCargando>
    )
}

export default Loading