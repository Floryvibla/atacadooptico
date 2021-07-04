import styled from 'styled-components'

const ViewArea= styled.div`
    width: 100%;
    height: 100%;
`
const HeaderArea= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5%;
    
    height: 90px;
`

const LogoArea= styled.div`
    flex:1;
    display: flex;
    justify-content: flex-start;
    height: 100%;
`
const Image= styled.img`
    width: 50%;
    object-fit: contain;
    /* height: 100px; */
`
const InputArea= styled.div`
    flex: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: seagreen; */
`
const ClientArea= styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const BannerArea= styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: red;
`

export {
    ViewArea,
    HeaderArea,
    LogoArea,
    Image,
    InputArea,
    ClientArea,
    BannerArea,
}