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
            <div id = "container-footer" >
                <div className = "grid grid-col-4 container-footer-menu horizontal-center font-white">
                    <div>
                        <h3>Get to Know Us</h3>         
                        <p>Careers</p>
                        <p>Blogs</p>
                        <p>About</p>
                    </div>
                                        
                    <div>
                        <h3>Sell</h3>         
                        <p>Start seeling</p>
                        <p>Quickstart guide</p>
                        <p>Affiliates</p>
                    </div>

                    <div>
                        <h3>Tools</h3>         
                        <p>Mobile Apps</p>
                        <p>Developers</p>
                        <p>Site map</p>
                    </div>

                    <div>
                        <h3>Help</h3>         
                        <p>Security Center</p>
                        <p>Contact Us</p>
                    </div>
                </div>

                <div className="container-footer-menu horizontal-center font-white"> 
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


