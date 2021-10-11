import React, { Component } from 'react'
import { storeProducts, productDetail } from '../services/fakeProductService';

const ProductContext = React.createContext();
// two components comes with it 
// 1. Provider
// 2. Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        productDetail: productDetail,
        cart:[], 
        modalOpen: false,
        modalProduct: productDetail,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }
    componentDidMount() {
        this.setProducts()
    }
    setProducts = () => {
        let products=[]
        storeProducts.forEach(item => {
            const singleItem = { ...item }
            products = [...products, singleItem]
        })
        this.setState(() => {
            return {products}
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product
    }

    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState(() => {
            return {productDetail: product}
        })
    }
    addToCart = (id) => {
        const tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.incart = true
        product.count = 1
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {products: tempProducts, cart:[...this.state.cart, product]}
        }, () => {
            this.addTotals()
        })
    }

    openModal = id => {
        const product = this.getItem(id)
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }
    closeModal = () => {
       this.setState(() => {
           return {modalOpen: false}
       })
    }
    handleIncrement = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)

        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        
        product.count = product.count + 1
        product.total = product.price * product.count

        this.setState(() => {
            return{cart: [...tempCart]}
        }, ()=>{
            this.addTotals()
        })
    }

    handleDecrement = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)

        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        
        product.count = product.count - 1
        if (product.count === 0) {
            this.removeItem(id)
        }
        else {
        product.total = product.price * product.count
        this.setState(() => {
            return{cart: [...tempCart]}
        }, ()=>{
            this.addTotals()
        })
        }
    }

    handleDelete = (id) => {
        const tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => id != item.id)
        
        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index]
        removedProduct.incart = false;
        removedProduct.count = 0;
        removedProduct.total = 0

        this.setState(()=> {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        },() => {
            this.addTotals()
        })
    }  
    // if youre gonna have the other setup where instead of running 
    // the method of geting the copies of the objects that you have
    // if youre gonna set it equal to this product, this is where the 
    // mistake is gonna happen, again remember objects in the state 
    // are gonna be looking for the reference

    // so this.setProducts() is gonna give the a new fresh original copies of the objects

    clearCart = () => {
        this.setState(() => {
            return {cart : []};
        }, () => {
           this.setProducts();
           this.addTotals()
        })
    }
    addTotals = () => {
        let subTotal = 0
        this.state.cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState(() => {
            return {
                cartSubTotal : subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                handleDetail: this.handleDetail, 
                addToCart:this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                handleIncrement: this.handleIncrement,
                handleDecrement: this.handleDecrement,
                handleDelete: this.handleDelete,
                clearCart: this.clearCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
}}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
