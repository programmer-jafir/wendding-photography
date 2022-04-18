import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className='mt-5 ms-5 mb-5' id='services'>
            <h2 className='text-center text-primary mt-4'>Our Services</h2>
            <div className='services-container'>
            {
                services.map(service => <Service
                key ={service.id}
                service={service}
                >
                </Service>)
            }
            </div>
        </div>
    );
};

export default Services;