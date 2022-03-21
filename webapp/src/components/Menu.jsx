import React from "react";
import { Link } from "react-router-dom";



export default function Menu() {
    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid py-2">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(página atual)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Destino">Destino</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="Promocao">Promoção</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="Contato">Contato</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="EscolhaVoo">Escolha seu voo</Link>
                        </li>

                    </ul>
              
                </div>
                <Link className="navbar-brand mx-auto fw-bold" to="/">RECODE DECOLAR</Link>
                
               
                
            </div>
        </nav>

    );
}




 //<nav>
           // <Link to="/">Home</Link><br/>
           // <Link to="/Destino">Destino</Link><br/>
            //<Link to="/Promocao">Lojas</Link><br/>
            //<Link to="/Contato">Contato</Link>
        //</nav>