import React,{useState} from 'react'

import './style.css'

import Card from '../../Components/Detail/Card/'
import Header from '../../Components/Detail/Header'
import BarCart from '../../Components/Home/AddCart'

function Detail(){

    const cart= JSON.parse(localStorage.getItem('cart'))

    const [items, setItems] = useState(cart)

    const plus= (index) => {
        let newList= [...items]
        let price= cart[index].price
        newList[index].price = newList[index].price + price

        let newQtd= [...items]
        newQtd[index].quatidade = newQtd[index].quatidade + 1
        setItems(newList)
    }
    const moins= (index) => {
        let newList= [...items]
        let price= cart[index].price
        newList[index].price = newList[index].price - price

        if(newList[index].price < price){
            newList.splice(index, 1)
            setItems(newList)
            localStorage.setItem('cart', JSON.stringify(newList))
        }

        let newQtd= [...items]
        newQtd[index].quatidade = newQtd[index].quatidade - 1
        setItems(newList)
    }

    const handleDelete= (index) => {
        let newList= [...items]
        newList.splice(index, 1)
        setItems(newList)
        localStorage.setItem('cart', JSON.stringify(newList))
    }

    const price= items.reduce((a, b) => {
        return a + b.price
    }, 0)

    const cards= items.map((i, index) =>{
        
        return(
            <Card
                key= {index}
                img= {i.image}
                imgAlt= {i.name}
                name= {i.name}
                price= {i.price}
                categorie= {i.categorie}
                moins= "-"
                plus= "+"
                devise="R$"
                qtdMoins={() => moins(index)}
                qtdPlus={() => plus(index)}
                qtd= {i.quatidade}
                delete= {() => handleDelete(index)}
            />

        )
    })
    
    return (
        <div className="Detail">
            <div className="Header">
                <Header/>
            </div>
            <div className="container2">
                {items.length > 0 ? {cards} : <h1>Seu carrinho está vazio</h1>}
            </div>

            {items.length > 0 &&
                <div>
                    <BarCart
                        title="Finalizar a compra"
                        img= {items.map((i) => i.image)}
                        price= {price}
                        item= {cart.length}
                    />
                </div>
            }
        </div>
    )
}

export default Detail
