import React from 'react'
import "./footer.css"
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
    const allLinks = [
        { title: "links", links: ['Overons', 'Social Media', 'Counters', 'Contact'] },
        { title: "company", links: ['Terms $ condition', 'Privacy Policy', 'Contact'] },
        { title: "Get in Touch", links: ['Crechterwoord K12 182 DK Alknjkcb', '085-132567', 'info@payme.net'] },
    ]
    return (
        <div className='gpt3__footer section_padding'>
            <div className='gpt3__footer__heading_container'>
                <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
                <button>Request Early Access</button>
            </div>
            <div className='gpt3__footer__links'>
                <div className='logo__address'>
                    <img src={gpt3Logo} alt="gpt3_logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className='links__container'>
                    {allLinks.map((link) =>
                        <div className='links' key={link.title}>
                            <h4>{link.title}</h4>
                            {link.links.map(text => (
                                <p>{text}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='gpt3__footer__license'>
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer