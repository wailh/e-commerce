import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { ButtonContainer } from './button'

const Navbar = () => {
    return ( 
        <NavRapper className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to='/productList'>
                    <i className="fa fa-mobile nav-icon me-5 "></i>
                    <span className='nav-name ms-5'>Products</span>
                </Link>
                <div className="my-cart">
                        <Link className="nav-link ms-auto" to='/myCart'>
                            <ButtonContainer >
                               <i className="fa fa-cart-plus me-1 me-lg-1"></i>
                               My Cart
                            </ButtonContainer>
                        </Link>                  
                </div>
            </div>
        </NavRapper>
     );
}
 
export default Navbar;

const NavRapper = styled.nav`
   background: var(--mainBlue);
   .nav-name{
       color: var(--mainYellow);
       font-size: 1.5rem;
       transition: all 0.6s ease-in-out;
   }
   .nav-icon{
       color: var(--mainYellow);
       ${'' /* the reason why we're we using rem instead of pixel is the fact that pixels are absolute and rem 
       are targeting the root element which mean that even if the user changes its root from 16 to 20 */}
        font-size: 2rem;
        transition: all 0.6s ease-in-out;
        &:hover{
           transform: rotate(180deg)
        }
   }
`
