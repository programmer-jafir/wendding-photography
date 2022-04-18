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

            {/* <div className='form-container'>
            <div>
                <h2 className='from-title'>Your Shipping Info</h2>
                <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input onBlur={handleNameBlur} type="name" name='name' id='' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Your Email</label>
                    <input value={user?.email} readOnly  type="email" name='email' id='' required/>
                </div>
                <div className="input-group">
                <label htmlFor="address">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name='text' id='' required />
                </div>
                <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                    <input onBlur={handlePhonerdBlur} type="text" name='phone' id='' required />
                </div>
                <p style={{color: 'red'}}>
                    {error}
                </p>
                <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div> */}
        </div>
    );
};

export default Checkout;