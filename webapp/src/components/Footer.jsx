import React from "react";
import './Footer.css';


export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <h3> RECODE DECOLAR</h3>
                    <p>Vem viajar aqui com a gente e conhecer o mundo pela terra, mar e ar.</p>
                    <ul className="socials">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        
                    </ul>
                        
                </div>

            </footer>
        </>
    );
}