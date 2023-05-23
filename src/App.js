import React from "react";
import Card from "./components/Card/Card";

import "./index.scss";
import "@fontsource/source-sans-pro";
import flag from "./images/flag.png";
import sliderImage from "./images/slider-img.png";

export const cardData = [
    {
        rating: "3.7",
        subtitle: "Writers’ Tears",
        title: "Whiskey Writers Tears Red Head, Writers Tears",
        description: "Speyside Single Malt Scotch Whisky...",
        productInfo: "500 ml",
        country: "Ireland",
        countryCode: flag,
        sliderData: [
            { src: sliderImage, alt: "image description" },
            { src: sliderImage, alt: "image description" },
            { src: sliderImage, alt: "image description" },
        ],
    },
    {
        rating: "3.7",
        subtitle: "Writers’ Tears",
        title: "Whiskey Writers Tears Red Head, Writers Tears",
        description: "Speyside Single Malt Scotch Whisky...",
        productInfo: "500 ml",
        country: "Ireland",
        countryCode: flag,
        sliderData: [
            { src: sliderImage, alt: "image description" },
            { src: sliderImage, alt: "image description" },
            { src: sliderImage, alt: "image description" },
        ],
    },
];

function App() {
    return (
        <div className="app">
            <div className="wrapper">
                {cardData.map((item, index) => (
                    <div key={index} className="col">
                        <Card key={index} colorScheme="dark" {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
