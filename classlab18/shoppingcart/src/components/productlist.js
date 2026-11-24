import '../App.css'

import apple from '../images/apple (1).png'
import orange from '../images/orange.png'
import grape from '../images/grapes.png'

// Create a list of products with metadata
const products = [
    {id:1, name:"Apple", price:1, was: 2.5, image: apple},
    {id:2, name:"Grape", price:1.5, was: 2.8, image: grape},
    {id:3, name:"Orange", price:3, was: 5.0, image: orange}
]

const Productlist = ()=>{
    return(
        <>
            <h2 className='producttitle'>Products</h2>
            <section className='cardcontainer'>
                {
                    products.map((product)=>{
                        return(
                        <div key={product.id} className='card'>
                            <img src={product.image} />
                            <p className='productname'>{product.name}
                                <s>${product.was}/lb</s>
                                <span>${product.price}</span> / lb
                            </p>
                            <button className='btn_addcard'>Add to cart</button>
                        </div>
                        )
                    })
                }
            </section>
        </>
    )
}



export default Productlist