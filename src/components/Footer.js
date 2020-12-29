import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MainLogo from "../assets/main_logo.png";
import "../styles/Footer.scss";
import { Link } from "react-router-dom";

function Footer() {

    return (
        <div className="footer">
            <div className="footer-row-info">
                <div className="footer-nav-button">
                    <Link to="/about">
                        About us
                    </Link>
                </div>
                <div className="footer-nav-button">
                    <Link to="/trustandsafety">
                        Trust and Safety
                    </Link>
                </div>
                <div className="footer-nav-button">
                    <Link to="/support">
                        Support
                    </Link>
                </div>
                <div className="footer-nav-button">
                    <Link to="/privacypolicy">
                        Privacy Policy
                    </Link>
                </div>
            </div>
            <div className="footer-split"></div>
            <div className="footer-row-social">
                <div className="social-info">
                    <div className="info-item">
                        <Link to="/">
                            <img src={MainLogo} alt="main"/>
                        </Link>
                    </div>
                    <div className="info-item">
                        © JobyUP International 2020
                    </div>
                </div>
                <div className="social-icons">
                    <div className="icon-item">
                        <FacebookIcon />
                    </div>
                    <div className="icon-item">
                        <InstagramIcon />
                    </div>
                    <div className="icon-item">
                        <TwitterIcon />
                    </div>
                    <div className="icon-item">
                        <LinkedInIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
