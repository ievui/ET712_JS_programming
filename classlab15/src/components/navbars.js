import React from "react"
import {Link} from "react-router-dom"

const Navbars=function(){
    return(<>
        <header className>
            <nav className="navbar">
                <div>
                    <a href="https://www.qcc.cuny.edu" target= "blank" className="link">QCC</a>
                </div>

                <div className="btngroup">
                    <button><link to='/contact'>Contact Us</link></button>
                    <button><link to='/'>Home</link></button>

                </div>
            </nav>
        </header>
    </>)
}
export default Navbars