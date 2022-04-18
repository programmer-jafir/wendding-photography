import React  from 'react';
import { toast } from 'react-toastify';
;

const Checkout = () => {
    const handleCheckout = (event)=>{
        event.preventDefault();
    }

    return (
        <div>
            <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Check out form</h2>
            <form onSubmit={handleCheckout}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <label htmlFor="name">Adress:</label>
                <input type="text" name="address" id="" placeholder='Your Address' required />
                <label htmlFor="Phone">Phone Number:</label>
                <input type="text" name="phone" id="" placeholder='Phone Number' required />

                <button className='btn btn-primary text-ligth pe-auto text-decoration-none'>Checkout</button>
            </form>
            
        </div>
        </div>
    );
};

export default Checkout;