import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import "./style.css"

const HeaderArea= styled.div`
    display: flex;
    align-items: center;
    height: 100px;
`

const Header = (props) => {
    return (
        <HeaderArea>
            <Link to="/" className="linkDetail">
                <div className="Back">
                    &#8592;
                </div>
            </Link>
            
            <div className="titleDetail">
                {props.title ?? "Carrinho"}
            </div>
        </HeaderArea>
    )
}

export default Header
