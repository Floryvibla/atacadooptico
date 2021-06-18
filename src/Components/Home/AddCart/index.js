import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import styled from 'styled-components'
import "./style.css"

const Item= styled.div`
    background-image: url('${props => props.img}');
`

const Page = (props) => {

    const [actived, setActived] = useState(false)

    let y= window.pageYOffset
    window.onscroll= () => {
        let x= window.pageYOffset
        if (y > x) {
            setActived(false)
        } else {
            setActived(true)
        }
        y= x
    }


    const image= props.img
    const len= image.length - 1
    return (
        <Link to={props.link ?? "/detail"} className="link">
        <div className={actived ? "bar actived" : "bar"}>
            <div className="div-item">
                <Item img={image[len]} className="item">
                    <div className="itens">
                        {props.item}
                    </div>
                </Item>
            </div>
            <div className="title">{props.title ?? "Ver Sacola"}</div>
            <div className="price">R$ {parseFloat(props.price).toFixed(2) ?? 0 }</div>
        </div>
        </Link>
    )
}

export default Page
