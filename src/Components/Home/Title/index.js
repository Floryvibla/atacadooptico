import React from 'react'
import styled from 'styled-components'

const TitleArea= styled.div`
    margin-bottom: 10%;
    font-size: 1.8em;
`


const Title = (props) => {
    return (
        <TitleArea className="div-Title">
            <h1>{props.title}</h1>
        </TitleArea>
    )
}

export default Title

