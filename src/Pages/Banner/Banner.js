import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';

import banner from '../../img/banner/banner.png';
import banner2 from '../../img/banner/banner-2.png';
import banner3 from '../../img/banner/banner-3.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Wedding Photography</h3>
                        <p> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Wedding Photography</h3>
                        <p> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Wedding Photography</h3>
                        <p>
                        It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;