import React from 'react' 
import {ProductConsumer} from './context'
import Product from './product'
import styled from 'styled-components';

const ProductList = () => {
    return ( 
        <div className='home'>
            <div className='container pt-5'>
                <Title >Our Products</Title>
                <div className='product-cart row'>
                    <ProductConsumer >                
                        {(products) => 
                           products.products.map(product => 
                             <Product key={product.id} product={product} />
                        )
                        }
                    </ProductConsumer>
                </div>
            </div>
        </div>
     );
}
 
export default ProductList;

const Title = styled.h1`
    color: var(--mainBlue);
    text-align: center;
    text-transform: uppercase;
`