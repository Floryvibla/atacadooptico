import React from 'react'
import styled from 'styled-components'

import db from '../../../DB'

import Card from './Card/'

function Index(props) {

    const cardProduct= db.slice(0, 6).map((i, index) => {
       return(
            <Card 
                key={index} 
                images={i.image} 
                name={i.name} 
                price={i.price}
                categorie={i.categorie}
            />
       )
    })

    return (
        <View>
            <TitleCard>
                <Title>{props.title ?? 'MAIS VENDIDOS'}</Title>
                <SubTitle>Ver Mais</SubTitle>
            </TitleCard>

            <CardView>
                {cardProduct}
            </CardView>
        </View>
    )
}


const View= styled.div`
    width: 90vw;
    height: 380px;
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`
const TitleCard= styled.div`
    width: 98%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`
const Title= styled.div`
    font-size: 1em;
    font-weight: bold;
    margin: 10px 10px;
`
const SubTitle= styled.div`
    font-size: 0.9em;
    margin: 10px 10px;
    cursor: pointer;

    &:hover{
        color: #ec7200;
    }
    &:active{
        color: #ec720096;
        cursor: grabbing;
    }
`

const CardView= styled.div`
    width: 98%;
    height: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: space-around;
`


export default Index
