import React from 'react'
import styled from 'styled-components'
// import {Link} from 'react-router-dom'
import {} from 'react-icons'

import Categorie from './Categorie'

function Index() {

    const array= [
        {title: 'Óculos', icon: 'GiSunglasses'},
        {title: 'Lentes', icon: 'GiSpectacleLenses'},
        {title: 'Blocos', icon: 'GiStoneBlock'},
        {title: 'Acessórios', icon: 'GiDiscGolfBag'},
        {title: 'Insumos', icon: 'MdSettingsInputSvideo'},
        {title: 'Fornituras', icon: 'GiProfit'},
        {title: 'Ferramentas', icon: 'BsTools'},
        {title: 'Equipamentos', icon: 'GiMachineGun'},
        {title: 'Rastrear', icon: 'FiTruck'},
    ]

    return (
        <View>
            {array.map((value, index) => {
                return(
                    <Categorie title={value.title} />
                )
            })}
        </View>
    )
}




const View= styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #0c1a41;
    display: flex;
    justify-content: space-around;
    align-items: center;
`




export default Index
