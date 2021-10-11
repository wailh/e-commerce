import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './button'
import { ProductConsumer } from './context'
import styled from 'styled-components'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
               {value => {    
                   const {modalOpen, closeModal} = value
                   const {name, price, incart} = value.modalProduct 
                if (!modalOpen) {
                    return null
                }
                return(    
                <ModalContainer>
                  <div id='modal' className="container" style={{width: '400px'}}>
                      <div className="row">
                          <div className="model col-10 mx-auto col-md-12 col-lg-12 text-center text-uppercase p-5" >
                            <h4>Item Added To Cart</h4>
                            <img className='img-fluid' 
                                src='phones/samsung s21.jpg' alt='product'/> 
                            <h4>{name}</h4>
                            <h5 className='text-muted'>Price: {price}$</h5>
                            <Link to='/productList'>
                                <ButtonContainer back
                                    onClick={() => closeModal()}>
                                    Continue shopping
                                </ButtonContainer>
                            </Link>
                            <Link to='/myCart'>
                                <ButtonContainer
                                            cart
                                            onClick={()=> 
                                                closeModal()
                                            }>
                                    Go To Cart
                                </ButtonContainer>
                            </Link>
                          </div>
                      </div>
                  </div>
                </ModalContainer>   
                )  
               }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
   background: rgba(0, 0, 0, 0.5);
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom:0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 2;
   
   #modal {
       background: var(--mainWhite)
   }
`