import React from 'react'
import styled from 'styled-components'
// import {Link} from 'react-router-dom'
// import {GiSunglasses} from 'react-icons/gi'
// import {GiSpectacleLenses} from 'react-icons/gi'
// import {GiStoneBlock} from 'react-icons/gi'
// import {GiDiscGolfBag} from 'react-icons/gi'
// import {MdSettingsInputSvideo} from 'react-icons/md'
// import {GiProfit} from 'react-icons/gi'
// import {BsTools} from 'react-icons/bs'
// import {GiMachineGun} from 'react-icons/gi'
// import {FiTruck} from 'react-icons/fi'


function Categorie(props) {

    return (
        <Nav>
            <div>
            </div>
            <div style={{color: '#fff'}}>{props.title}</div>
        </Nav>
        
    )
}




const Nav= styled.nav`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 5px;

    &:hover{
        background-color: #1d3169;
        box-shadow: 0px 0px 10px #0c1a41;
    }
    &:active{
        background-color: #0c1a41;
        height: 90%;
    }
`




export default Categorie
