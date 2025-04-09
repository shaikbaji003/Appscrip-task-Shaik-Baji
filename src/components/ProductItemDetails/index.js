
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Vortex} from 'react-loader-spinner'
import {BsDashSquare, BsPlusSquare} from 'react-icons/bs'

import './index.css'
import Header from '../Header'


const ProductItemDetails = () => {

    const [isLoadingScreen, setLoadingStatus] = useState(true)
    const [productDetails , setProductDetails] = useState({})
    const [productQuantity, setProductQuantity] = useState(1)

    const params = useParams();

        useEffect(()  => {

            fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then((response) => {
                return response.json()
            })
            .then((productDetailsData) => {
                setLoadingStatus(false)
                setProductDetails(productDetailsData)
            })
        },[params.id])

        const onDecrementQuantity = () => {
            if (productQuantity > 1) {
                setProductQuantity((prevState) => prevState - 1)
            }
        }
        
        const onIncrementQuantity = () => {
            setProductQuantity((prevState) => prevState + 1)
        }


        const { image, title, category, description, price, rating,} = productDetails

        console.log(title)

    return (
        <div className="product-item-details-section-container">
            <Header />
            {isLoadingScreen ? (
                <div className="product-details-loading-screen-container">
                    <Vortex color="rgb(139, 31, 153)" height="70" width="70" />
                </div>
            ):(
                <div className="product-details-section-container">
                    <div className="product-details-main-container">
                        <img src={image} alt="product" className="product-image" />
                        <div className="product">
                            <h1 className="product-name">{title}</h1>
                            <p className='category'>by {category}</p>
                            <p className="price-details">${price}</p>
                            <div className="rating-and-reviews-count">
                                <div className="rating-container">
                                    <p className="rating">{rating.rate}</p>
                                    <img
                                    src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                                    alt="star"
                                    className="star"
                                    />
                                </div>
                                <p className="reviews-count">{rating.count} Reviews</p>
                            </div>
                            <p className="product-description">{description}</p>
                            <hr className="horizontal-line" />
                            <div className="quantity-container">
                                <button type="button" className="quantity-controller-button" onClick={onDecrementQuantity} data-testid="minus">
                                    <BsDashSquare className="quantity-controller-icon" />
                                </button>
                                <p className="quantity">{productQuantity}</p>
                                <button type="button" className="quantity-controller-button" onClick={onIncrementQuantity} data-testid="plus" >
                                    <BsPlusSquare className="quantity-controller-icon" />
                                </button>
                            </div>
                            <button type="button" className="button add-to-cart-btn" >
                                ADD TO CART
                            </button>
                        </div>
                    </div>    
                </div>
            )}
        </div>
    )
}

export default ProductItemDetails