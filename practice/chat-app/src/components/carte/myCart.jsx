import React from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'
import cartColumns from './cartColumns'
import CarteColumns from './cartColumns';
import CarteList from './CarteList'
import EmptyCart from './EmptyCart';
import CartTotals from './CartTotals'

export default class MyCart extends React.Component {
    render() { 
        return ( 
            <section>
              <ProductConsumer>
                 {value => {
                     const {cart} = value;
                     if (cart.length > 0) {
                         return (
                            <React.Fragment>
                                <h1 className='text-center mb-5 pt-3'>Your Carte</h1>
                                <CarteColumns />
                                <CarteList value={value} />
                                <CartTotals value={value} history={this.props.history}/>
                            </React.Fragment>
                         )
                     }
                     else {
                        return <EmptyCart />
                     }
                 }}
              </ProductConsumer>
            </section>
         );
    }
}
 
