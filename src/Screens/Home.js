import React from 'react';
import Upper from '../Components/Upper';
import MainCTA from '../Components/MainCTA';

export default class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            songs: <p className="no-songs">Looks like you haven't uploaded any songs yet...</p>
        }
    }
    render(){
        return(
            <div className="logged-in-container">
                <Upper pageTitle="Your Songs"/>
                <br/>
                <div className="main-body">
                <center>
                <div className="songs-container"><br/>
                {this.state.songs}
                </div>
                </center>
                </div>
                <MainCTA onClick={()=>{window.location.href = "/upload"}} buttonTitle="Upload Song"/>
            </div>

        );
    }
}