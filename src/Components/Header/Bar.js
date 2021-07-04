import React from 'react'
import styled from 'styled-components'
import fb from './images/facebook.png'
import insta from './images/instagram.png'
import whats from './images/whatsapp.png'
import linkedin from './images/LinkedIn.jpg'


const Area= styled.div`
    /* width: 100%; */
    height: 10px;
    background-color: #ec7200;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`
const Frase= styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
`
const Contact= styled.div`
    font-size: 16px;
    font-weight: bold;
`
const SocialMidida= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
`
const Image= styled.img`
    width: 5%;
    margin-left: 10px;
    border-radius: 100px;
`

function Bar() {
    return (
        <Area>
            <Frase>
                Aqui várias frases mudando a cada visita
            </Frase>
            <Contact>
                COMO PODEMOS TE AJUDAR: (31) 3657-4365
            </Contact>
            <SocialMidida>
                <Image src={fb} alt="Logo Facebook" />
                <Image src={insta} alt="Logo Instagram" />
                <Image src={whats} alt="Logo WhatsApp" />
                <Image src={linkedin} alt="Logo Linkedin" />
            </SocialMidida>
        </Area>
    )
}

export default Bar
