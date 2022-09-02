import React from 'react'
import { Feature } from '../../components'
import { data } from './data'
import "./features.css"

const Features = () => {
    return (
        <div className="gpt3__features section_padding">
            <div className="gpt3__features-heading">
                <h1 className="gradient_text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {data.map(({ title, text }) => (
                    <Feature key={title} title={title} text={text} />
                ))}
            </div>
        </div>
    )
}

export default Features