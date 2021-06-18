import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


import './style.css'

import Db from '../../DB'
import Title from '../../Components/Home/Title/'
import Search from '../../Components/Home/Search/'
import Card from '../../Components/Home/Card/' 
import BarCart from '../../Components/Home/AddCart/'



const Home = () => {

    

    const [text, setText] = useState("")
    const [product] = useState(Db)
    const [cart, setCart] = useState([])

    const history= useHistory()

    useEffect(() => {
        const inicialCart= JSON.parse(localStorage.getItem('cart'))
        if(inicialCart){
            setCart(inicialCart)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    const addCart= (index) =>{
        let newList= [...product]
        setCart([...cart, newList[index]])
    }

    const price= cart.reduce((a, b) => {
        return a + b.price
    }, 0)

    const getCart= () => {
        history.replace('/detail')
    }


    const filterSearch= product.filter(i => {
        return i.categorie.toLowerCase().includes(text.toLowerCase())
    })

    



    const cards= filterSearch.map((i, index) =>{
        
        return(
            <Card
                key= {index}
                link= "/detail"
                img= {i.image}
                imgAlt= {i.name}
                name= {i.name}
                price= {i.price}
                categorie= {i.categorie}
                addCart= "+"
                devise="R$"
                cart= {() => addCart(index)}
            />
        )
    })

    return (
        <div className="Home">
            <Title title= "Black in Control" />
            <div className= "search">
                <Search 
                    placeholder= "Pesquisar..."
                    value={text}
                    onChangeText= {(e) => setText(e.target.value)}
                />
            </div>
            {filterSearch < 1 ? `Sem resultados` : ""}
            
            <div className="Card">
                {cards}
            </div>
            {cart.length > 0 &&
                <div className="BarCart">
                    <BarCart 
                        title= "Ver carrinho"
                        price= {price}
                        item= {cart.length}
                        img= {cart.map((i) => i.image)}
                        index= {cart}
                        onClickBtn={() => getCart()}
                    />
                </div>
            }
        </div>
    )
}

export default Home
