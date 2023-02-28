// import { useParams } from "react-router-dom";
// import axios from "axios";
// import {useState, useEffect} from 'react'


// const Product = () => {
//     const [product, setProduct] = useState ([])

//     let { catalogoId } = useParams()

//     useEffect (() => {
//         const getProduct = async() =>{
//             const response = await axios('https://fakestoreapi.com/products')
//             const data = await response.data

//             let productSelected = data.find(product => product.id == catalogoId)

//             setProduct(productSelected)
//         }
//         getProduct()
//     },[])

//   return (
//     <div>
//         <h1>{product.title}</h1>
//         <img src={product.image} alt={product.title}/>
//     </div>
//   )
// }

// export default Product