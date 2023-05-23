import React from "react";
import Card from "./Card";

import flag from "../../images/flag.png";
import sliderImage from "../../images/slider-img.png";
import "../../index.scss";

export default {
    title: "Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        colorScheme: {
            type: "string",
            description: "color-theme",
            options: ["basic", "dark"],
            control: {
                type: "radio",
            },
        },
        rating: {
            type: "string",
            description: "rating text",
        },
        subtitle: {
            type: "string",
            description: "subtitle text",
        },
        title: {
            type: "string",
            description: "title text",
        },
        description: {
            type: "string",
            description: "product description",
        },
        productInfo: {
            type: "string",
            description: "product quantity",
        },
        country: {
            type: "string",
            description: "country of origin",
        },
        countryCode: {
            type: "string",
            description: "country image",
        },
        sliderData: {
            type: "array",
            description: "slider images",
        },
    },
};

const Template = (arg) => <Card {...arg} />;

export const Default = Template.bind({});
Default.args = {
    colorScheme: "basic",
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
};

export const Dark = Template.bind({});
Dark.args = {
    colorScheme: "dark",
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
};
