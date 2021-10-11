import React from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './context'
import styled from 'styled-components';
import PropTypes from 'prop-types'

export default class Product extends React.Component {
    render() { 
        const {id, name, img, price, incart, company, info} = this.props.product
        return (
                <ProductWrapper className='product col-9 mx-auto col-md-6 col-lg-3 my-3'>
                    <div className='card'>
                    <ProductConsumer> 
                       {(product) => (
                        <div 
                        className='img-container p-5'
                        onClick={() => product.handleDetail(id)}
                        >
                            <Link to='/productDetail'>
                                <img className='card-img-top' src={img} alt='error' style={{width: '180px', height: '220px'}}/>
                            </Link>
                            
                            <button 
                                className='cart-btn me-auto'
                                disabled={incart ? true : false}
                                onClick={() => {
                                    product.addToCart(id)
                                    product.openModal(id)
                                    }}
                                >
                                {incart ? (
                                <p 
                                    className='mb-0' 
                                    disabled>
                                    in Cart
                                </p>) : (
                                    <i className='fa fa-cart-plus'/>
                                )}
                            </button>
                        </div>
                        )}
                    </ProductConsumer>
                        {/* card footer */}
                        <div className="card-footer d-flex justify-content-between">
                            <p className='align-self-center mb-0'>
                                {name}
                            </p>
                            <h5 className="text-blue font-italic mb-0">
                                <span className="ms-1">$</span>
                                {price}
                            </h5>
                        </div>
                    </div>
                </ProductWrapper>

        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
   .card {
       border-color: transparent;
       transition: all .5s ease-in-out;
       background-color: rgb(245, 245, 245)
   }
   .card-footer {
       background: transparent;
       color: var(--mainBlue);
       border-top: transparent;
       transition: all 0.2s linear;
   }
   &:hover {
       .card{
           border: 0.04rem solid rgba(3, 22, 105, 0.2);
           box-shadow: 2px 3px 7px 0px rgba(3, 22, 105, 0.2);
       }
       .card-footer {
           background: var(--mainBlue);
           color: var(--mainWhite)
       }
   }
    .card .img-container {
        position: relative;
        overflow: hidden;  
    }
    .card-img-top {
        transition: all .5s linear;
        margin-bottom: 20px;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2)
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background-color: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all .5s linear
    }
       .card .img-container:hover .cart-btn {
            transform: translate(0,0)
       }
       .card .img-container .cart-btn:hover {
           color: var(--mainBlue);
           cursor: pointer;
       }
    }
`
 