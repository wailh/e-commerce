import { Redirect, Route, Switch } from 'react-router';
import ProductList from './components/productList';
import ProductDetail from './components/productDetail';
import Navbar from './components/navbar';
import NotFound from './components/not-found';
import MyCart from './components/carte';
import Modal from './components/modal'
import './App.css';

function App() {
  return (
    <div className="App">
         <Navbar />
         <Switch >
           <Route path='/productList' component = {ProductList} />
           <Route  path='/productDetail' component = {ProductDetail} />
           <Route  path='/myCart' component = {MyCart} />
           <Route  path='/not-found' component = {NotFound} />
           <Redirect  exact from='/' to='/productList' />
           <Route component = {NotFound} />
         </Switch>
         <Modal />
    </div>
  );
}

export default App;
