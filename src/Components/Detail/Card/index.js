import React from 'react'
import {Delete, ViewQtd, DivAdd, BtnPlus, BtnMoins, CardArea, ImgArea, Container, NameArea, CategorieArea, PriceArea, Wrapper} from './styled'


const CardProduct = (props) => {
    return (
        <>
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

                <Delete onClick={props.delete ?? ""}>
                    &#10005;
                </Delete>

                <CategorieArea className="Div-CardProduct-categorie">
                    {props.categorie}
                </CategorieArea>

                <Wrapper className="Div-CardProduct-wrapper">
                    <PriceArea className="Div-CardProduct-price">
                        {props.devise} {parseFloat(props.price).toFixed(2)}
                    </PriceArea>

                    <DivAdd>
                        <BtnPlus 
                            className="Div-CardProduct-btnAdd" 
                            onClick={props.qtdMoins}>

                            {props.moins}
                        </BtnPlus>

                        <ViewQtd>
                            {props.qtd ?? 1}
                        </ViewQtd>

                        <BtnMoins 
                            className="Div-CardProduct-btnAdd" 
                            onClick={props.qtdPlus}>

                            {props.plus}
                        </BtnMoins>
                    </DivAdd>
                </Wrapper>
            </Container>
        </CardArea>
        <hr/>
        </>
    )
}

export default CardProduct
