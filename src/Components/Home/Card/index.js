import React from 'react'
import {BtnArea, CardArea, ImgArea, Container, NameArea, CategorieArea, PriceArea, Wrapper} from './styled'


const CardProduct = (props) => {
    return (
        <CardArea className="Div-CardProduct">

            <ImgArea 
                src={props.img} 
                alt= {props.imgAlt} 
                className="Div-CardProduct-img"
                onClick={props.cart}
            />

            <Container className="Div-CardProduct-container">
                <NameArea className="Div-CardProduct-title">
                    {props.name}
                </NameArea>

                <CategorieArea className="Div-CardProduct-categorie">
                    {props.categorie}
                </CategorieArea>

                <Wrapper className="Div-CardProduct-wrapper">
                    <PriceArea className="Div-CardProduct-price">
                        {props.devise} {parseFloat(props.price).toFixed(2)}
                    </PriceArea>

                    <BtnArea 
                        className="Div-CardProduct-btnAdd" 
                        onClick={props.cart}>

                        {props.addCart}
                    </BtnArea>
                </Wrapper>
            </Container>
        </CardArea>
    )
}

export default CardProduct
