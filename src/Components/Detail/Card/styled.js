import styled from 'styled-components'


const CardArea= styled.div`
    display: flex;
    max-width: 95%;
    max-height: 100px;
    background-color: rgba(246, 248, 247, 0.9);
    margin-bottom: 7%;
    border-radius: 5px;
    ${'' /* box-shadow: inset 0px 0px 70px rgba(25, 25, 25, 0.6); */}
    position: relative;
`
const ImgArea= styled.img`
    max-width: 30%;
    max-height: 100%;
    object-fit: cover;
    box-shadow: 0px 20px 20px rgba(19, 16, 16, 0.4);
`
const Container= styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 10px 10px 0px 10px;
`
const NameArea= styled.div`
    font-size: 1.2em;
    font-weight: 900;
    max-width: 100%;
    color: #000;
`
const CategorieArea= styled.div`
    margin-bottom: 5px;
    color: rgba(75, 74, 74, 0.493);
    font-size: 1em;
`
const PriceArea= styled.div`
    font-weight: 900;
    font-size: 1.2em;
    width: 100%;
`
const Wrapper= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    width: 100%;
`

const DivAdd= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`

const ViewQtd= styled.div`
    margin: 0px 5px; 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #fff;
`

const BtnPlus= styled.div`
    width: 25px;
    height: 25px;
    font-size: 1.5em;
    border-radius: 50%;
    background-color: #0a070225;
    color: #ecbe6f;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const BtnMoins= styled.div`
    width: 25px;
    height: 25px;
    font-size: 1.5em;
    border-radius: 50%;
    background-color: #0a070225;
    color: #ecbe6f;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const Delete= styled.div`
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    color: grey;
    top: -5px;
    right: 5px;

    &:hover{
        color: #ecbe6f;
    }
`



export {
    Delete,
    ViewQtd,
    DivAdd,
    BtnPlus,
    BtnMoins, 
    CardArea,
    ImgArea,
    Container,
    NameArea,
    CategorieArea,
    PriceArea,
    Wrapper,
}