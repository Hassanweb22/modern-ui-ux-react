import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./navbar.css"
import Logo from "../../assets/logo.svg"
import { useDelayUnmount } from "../../hooks"

const Menu = ({ setToggeleMenu }) => (
    <React.Fragment>
        <p><a href='#home' onClick={() => setToggeleMenu(false)}>Home</a></p>
        <p><a href='#whatGPT3' onClick={() => setToggeleMenu(false)}>What is GPT</a></p>
        <p><a href='#fetures' onClick={() => setToggeleMenu(false)}>Open AI</a></p>
        <p><a href='#possiblity' onClick={() => setToggeleMenu(false)}>Case Studies</a></p>
        <p><a href='#blog' onClick={() => setToggeleMenu(false)}>Libraries</a></p>
    </React.Fragment>
)

const Navbar = () => {
    const [toggeleMenu, setToggeleMenu] = useState(false)
    const shouldRenderMenu = useDelayUnmount(toggeleMenu, 200)

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu setToggeleMenu={setToggeleMenu} />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">
                    Sign up
                </button>
            </div>
            <div className="gpt3__navbar-menu">

                {toggeleMenu
                    ? <RiCloseLine size={20} color="#fff" onClick={_ => setToggeleMenu(false)} />
                    : <RiMenu3Line size={20} color="#fff" onClick={_ => setToggeleMenu(true)} />
                }
                {shouldRenderMenu &&
                    <div className={`gpt3__navbar-menu_container ${toggeleMenu ? "scale-up-tr" : "scale-down-tr"}`}>
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu setToggeleMenu={setToggeleMenu} />
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">
                                Sign up
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar