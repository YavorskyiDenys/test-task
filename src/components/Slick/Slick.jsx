import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({ images, colorScheme }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <Slider {...settings} className={`theme-${colorScheme}`}>
            {images?.map((img, index) => (
                <div key={index}>
                    <img src={img.src} alt={img.alt} />
                </div>
            ))}
        </Slider>
    );
}
