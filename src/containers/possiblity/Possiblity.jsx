import React from 'react'
import "./possiblity.css"
import possiblityImage from "../../assets/possibility.png"

const Possiblity = () => {
    return (
        <div className="gpt3__possibility section_padding">
            <div className="gpt3__possibility-image">
                {/* <div> */}
                <img src={possiblityImage} alt={`possiblity`} />
                {/* </div> */}
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h2 className="gradient_text">The possibilities are beyond your imagination</h2>
                <h4>Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                    Party we years to order allow asked of.
                </h4>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possiblity