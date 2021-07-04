import React,{useState, useEffect} from 'react'
// import {useHistory} from 'react-router-dom'


import './style.css'

// import Db from '../../DB'
import Carossel from '../../Components/Home/Carossel' 
// import BarCart from '../../Components/Home/AddCart/'
import Banner from '../../Components/Home/Banner/'
import Categories from '../../Components/Categories/'
import Footer from '../../Components/Footer/'



const Home = () => {

    

    // const [text] = useState("")
    // const [product] = useState(Db)
    const [cart, setCart] = useState([])

    // const history= useHistory()

    useEffect(() => {
        const inicialCart= JSON.parse(localStorage.getItem('cart'))
        if(inicialCart){
            setCart(inicialCart)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    // const addCart= (index) =>{
    //     let newList= [...product]
    //     setCart([...cart, newList[index]])
    // }

    // const price= cart.reduce((a, b) => {
    //     return a + b.price
    // }, 0)

    // const getCart= () => {
    //     history.replace('/detail')
    // }


    // const filterSearch= product.filter(i => {
    //     return i.categorie.toLowerCase().includes(text.toLowerCase())
    // })

    



    // const cards= filterSearch.map((i, index) =>{
        
    //     return(
    //         <Carossel/>
    //     )
    // })

    return (
        <div className="Home">
            <div className="Categorie" style={{marginBottom: 10}}>
                <Categories/>
            </div>
            
            <div className= "banner">
                <Banner/>
            </div>
            
            <div className="Carossel">
                <Carossel/>
                <Carossel title='Melhores Avaliações' />
            </div>

            <div className= "footer">
                <Footer/>
            </div>

            {/* {cart.length > 0 &&
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
            } */}
        </div>
    )
}

export default Home
