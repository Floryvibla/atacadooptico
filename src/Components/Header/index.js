import React from 'react'

import {ViewArea, LogoArea, Image, InputArea, ClientArea, HeaderArea} from './Styles'

import Logo from './images/logo.png'
import Bar from './Bar'
import Search from './Search'
import Client from './Client'


function index() {
    return (
        <ViewArea>
           <Bar/>
           <HeaderArea>
                <LogoArea>
                    <Image src={Logo} alt="Logo do atacado óptico" />
                </LogoArea>
                <InputArea>
                    <Search/>
                </InputArea>
                <ClientArea>
                    <Client/>
                </ClientArea>
           </HeaderArea>
        </ViewArea>
    )
}

export default index
