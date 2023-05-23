import React from "react";
import SimpleSlider from "../Slick/Slick";
import PropTypes from "prop-types";

import starImg from "../../images/star.svg";
import likeBtn from "../../images/like-btn.svg";
import detailsBtn from "../../images/details-btn.svg";

const Card = ({
    rating,
    subtitle,
    title,
    description,
    productInfo,
    country,
    countryCode,
    sliderData,
    colorScheme = "basic",
}) => {
    return (
        <div className={`card card-${colorScheme}`}>
            <span className="rating">
                <img src={starImg} alt="image description" />
                {rating}
            </span>
            <div className="btn-holder">
                <button>
                    <img src={likeBtn} alt="like button" />
                </button>
                <button>
                    <img src={detailsBtn} alt="details button" />
                </button>
            </div>
            <div className="img-holder">
                <SimpleSlider images={sliderData} colorScheme={colorScheme} />
            </div>
            <div className="text-holder">
                <span className="subtitle">{subtitle}</span>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="product-info">
                    <span>{productInfo}</span>
                    <span className="product-country">
                        <img src={countryCode} alt="Flag" />
                        {country}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;

Card.propTypes = {
    colorScheme: PropTypes.string,
    rating: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    productInfo: PropTypes.string,
    country: PropTypes.string,
    countryCode: PropTypes.string,
    sliderData: PropTypes.array,
};
