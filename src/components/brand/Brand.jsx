import React from 'react'
import "./brand.css"
import google from '../../assets/google.png'
import atlassian from '../../assets/atlassian.png'
import shopify from '../../assets/shopify.png'
import slack from '../../assets/slack.png'
import dropbox from '../../assets/dropbox.png'

const Brand = () => {

    const images = [
        { src: google, alt: "google" },
        { src: slack, alt: "slack" },
        { src: atlassian, alt: "atlassian" },
        { src: shopify, alt: "shopify" },
        { src: dropbox, alt: "dropbox" },
    ]

    return (
        <div className="gpt3__brand section_padding">
            {images.map(image => (
                <div className="gpt3__brand__image" key={image.alt}>
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    )
}

export default Brand