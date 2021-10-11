import React from 'react'

const CarteItem = ({item, value}) => {
    const {id, name, img, price, total, count} = item
    const {handleIncrement, handleDecrement, handleDelete} = value 
    return ( 
        <div className="row my-2 text-capitalize text-center">
            <div className=" mx-auto col-10 col-lg-2">
                <img src={img} style={{width: '5rem', height:'5rem'}} alt="product" className="img-fluid" />
            </div>
            <div className=" mx-auto col-10 col-lg-2">
               <span className='d-lg-none'>product : </span>
               {name}
            </div>
            <div className=" mx-auto col-10 col-lg-2">
            <span className='d-lg-none'>price : </span>
               {price}
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1"
                              onClick={() => handleDecrement(id)
                        }>
                         -
                        </span>
                        <span className="count btn btn-black mx-1" >
                         {count}
                        </span>
                        <span className="btn btn-black mx-1" onClick={() => handleIncrement(id)
                        }>
                         +
                        </span>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className=" mx-auto col-lg-2">
                <div className="cart-icon">
                    <i className="fa fa-trash" onClick={()=> handleDelete(id)}></i>
                </div>
            </div>
            <div className=" mx-auto col-lg-2">
                <strong>item total : $ {total}</strong>
            </div>
        </div>
     );
}
 
export default CarteItem;