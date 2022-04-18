import React from 'react';
import { useNavigate } from 'react-router-dom';
const Service = ({service}) => {
    const {id, name, img, description, description1, description2, description3, description4, description5, price} = service;

    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "22rem"}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{name} Package</h5>
                    <h3 className="card-title">Price: {price}</h3>
                    <p className="card-text">{description} <br/> {description1} <br/> {description2} <br/> {description3} <br/> {description4} <br/> {description5}</p>
                    <button onClick={() => navigateToServiceDetail(id)} href="#" className="btn btn-primary ">Checkout: {name} Pacakge</button>
                </div>
            </div>
        </div>
    );
};

export default Service;