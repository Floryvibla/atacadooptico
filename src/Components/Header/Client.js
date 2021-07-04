import React from 'react'
import { IconContext } from "react-icons";
import {IoPersonOutline} from 'react-icons/io5'
import {MdFavoriteBorder} from 'react-icons/md'
import {CgShoppingBag} from 'react-icons/cg'

import styled from 'styled-components'


const AreaView= styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
`
const IconArea= styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    border: 2px solid #00000093;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    /* padding: 5%; */
    margin-left: 10px;
`
const styles= {
    fontSize: 20, 
    color: '#00000093'
}

function Client() {

    return (
        <AreaView>
            <IconContext.Provider value={{style:styles}}>
                <IconArea>
                    <IoPersonOutline/>
                </IconArea>
                <IconArea>
                    <MdFavoriteBorder/>
                </IconArea>
                <IconArea>
                    <CgShoppingBag  />
                </IconArea>
            </IconContext.Provider>
        </AreaView>
    )
}

export default Client
