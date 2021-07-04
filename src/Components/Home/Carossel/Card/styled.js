import styled from 'styled-components'

const CardArea= styled.div`
    display: flex;
    flex-direction: column;
    width: 190px;
    height: 300px;
    background-color: rgba(246, 248, 247);
    box-shadow: 0px 0px 5px rgba(19, 16, 16, 0.178);
    border-radius: 10px;
    margin: 0% 1%;
    cursor: pointer;
    transition: all 1s;

    &:hover{
        box-shadow: 0px 0px 20px #00000079;
    }

    &:active{
        background-color: rgba(19, 16, 16, 0.178);
        cursor: grabbing;
    }
`
const ImgArea= styled.div`
    width: 100%;
    flex: 2;
    border-radius: 10px;
    background-image: url(${props => props.img});
    background-color: red;
    background-size: cover;

    &:hover{
        box-shadow: inset 0px 0px 50px #00000079;
    }
    &:active{
        box-shadow: inset 0px 0px 200px #000000;
    }
`
const Container= styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 95%;
    height: 100%;
    margin: 10px 10px 0px 10px;
`
const NameArea= styled.div`
    font-size: 1.2em;
    font-weight: 900;
    max-width: 100%;
    color: rgb(121, 120, 120);
`
const CategorieArea= styled.div`
    margin-bottom: 5px;
    color: rgba(75, 74, 74, 0.493);
`
const PriceArea= styled.div`
    font-weight: 900;
    font-size: 1.1em;
`
const Wrapper= styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
`
const BtnArea= styled.div`
    width: 25px;
    height: 25px;
    font-size: 1.5em;
    border-radius: 50%;
    background-color: #d4a551;
    color: cornsilk;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{
        background-color: #ecbe6f;
    }
    &:active{
        background-color: #ecbe6fbe;
    }
`
export {BtnArea, 
    CardArea,
    ImgArea,
    Container,
    NameArea,
    CategorieArea,
    PriceArea,
    Wrapper,
}