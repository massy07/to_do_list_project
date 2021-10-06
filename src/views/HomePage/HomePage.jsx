import React from "react";
import logo from './../../logo.svg'; 
import { useHistory } from 'react-router-dom';

//Style Of Component
import './homePage.scss';

const HomePage = () => {
 
    const history = useHistory();

    return(
        <div className="todolist-homepage">
            <div className="homepage-container">
                <label className="homepage-title">Ciao benvenuta francesca ecco la lista delle cose da fare</label>
                <div className="homepage-subtitle-container" >
                    <label className="homepage-subtitle"> clicca sulla icona per entrare </label> 
                    <button className="homepage-next-page-button" onClick={() => history.push("/listView") } />  
                </div>
            </div>
            <img src={logo} className="homepage-logo" alt="logo" />
        </div>
    )
}

  


export default React.memo(HomePage);
