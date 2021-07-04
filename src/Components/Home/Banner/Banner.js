import React from 'react'
import styled from 'styled-components'
import person from './images/womanGlass.jpg'

const AreaView= styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    background-color: #fff;
    border-radius: 10px;
`
const AreaImage= styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${person});
    display: flex;
    background-size: cover;
    border-radius: 10px;
    
`
const AreaContent= styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtonArea= styled.button`
    width: 100px;
    height: 30px;
    background-color: #d83a00;
    border: none;
    cursor: pointer;
    color: #fff;

    &:hover{
        background-color: #e7450a
    }

    &:active{
    background-color: #d83a0068
    }
`

function Banner() {
    return (
        <AreaView>
            <AreaImage>
            </AreaImage>
            <AreaContent>
                <div style={{
                    width: '90%', 
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <div>
                        <h1>PROMOÇÕES EXTRAORDINÁRIO DE ÓCULOS</h1>
                    </div>
                    <div>De 08/08/2021</div>
                    <div style={{padding: 20, width: '80%'}}>
                        Neste mês de consumidor, <strong>Compre</strong>
                        um modelo Florenza <strong>ganhe</strong> e deixe a montagem por nossa conta
                    </div>
                    <div>
                        <ButtonArea>QUEEERO!</ButtonArea>
                    </div>
                </div>
            </AreaContent>
        </AreaView>
    )
}

export default Banner
