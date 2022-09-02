import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./navbar.css"
import Logo from "../../assets/logo.svg"
import { useDelayUnmount } from "../../hooks"

const Menu = () => (
    <React.Fragment>
        <p><a>Home</a></p>
        <p><a>What is GPT</a></p>
        <p><a>Open AI</a></p>
        <p><a>Case Studies</a></p>
        <p><a>Libraries</a></p>
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
                    <Menu />
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
                            <Menu />
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