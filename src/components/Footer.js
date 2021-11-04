import React from 'react'
import "../css/App.css"
import "../css/utilities.css"
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id = "footer"> 
            <div>
                <div id = "container-footer-menu" className = "grid grid-col-4 container-footer-menu">
                    <div>
                        <h3>Watch</h3>         
                        <p>xxxx</p>
                    </div>
                                        
                    <div>
                        <h3>My Account</h3>         
                        <p>xxxx</p>
                    </div>

                    <div>
                        <h3>Features</h3>         
                        <p>xxxx</p>
                    </div>

                    <div>
                        <h3>Help</h3>         
                        <p>xxxx</p>
                    </div>
                </div>

                <div className="container-footer-menu"> 
                    <ul>
                        <li><BsFacebook/></li>
                        <li><BsInstagram/></li>
                        <li><AiFillTwitterCircle/></li>
                        <li><FaTiktok/></li>
                        <li><AiFillYoutube/></li>
                    </ul>
                </div>
            </div>
            
    </footer>
    )
}

export default Footer

