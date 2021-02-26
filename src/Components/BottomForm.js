import React from 'react';
import '../App.css';
import firebase from 'firebase/app';
var firebaseConfig = {
    apiKey: "AIzaSyA8pLz0it3fsyGDM897C-5d447BsbQQyWA",
    authDomain: "my-awesome-project-ebf03.firebaseapp.com",
    databaseURL: "https://my-awesome-project-ebf03.firebaseio.com",
    projectId: "my-awesome-project-ebf03",
    storageBucket: "my-awesome-project-ebf03.appspot.com",
    messagingSenderId: "1097690692681",
    appId: "1:1097690692681:web:c4fa8df4549fe75f38d398"
  };
firebase.initializeApp(firebaseConfig);

export default class BottomForm extends React.Component{
    constructor(){
        super();
        this.state = {
            cell: "",
            pass: "",
            text: "Create Account",
            email: "",
            code: ""
        }
    }

    componentDidMount(){
        if(window.location.href.indexOf("/signin") > -1){
            this.setState({text: "Login"});
            this.registerFirebase();
        }
    }

    loginOrCreateAccount(){
        var cell = this.state.cell;
        var pass = this.state.pass;
        var email = this.state.email;

        if(window.location.href.indexOf("/signin") > -1){
            this.login(cell, pass, email);
        }else{
            this.register(cell, pass, email);
        }
    }
    
    login(cell, pass){
        console.log("loggin in", cell, pass)
    }

    register(cell, pass, email){
        if(pass.length > 6 & cell.length == 10 & cell.split("")[0] == "0" || cell.split("")[0] == 0){
            try{
            firebase.auth().createUserWithEmailAndPassword(`${cell}@ocaccounts.co.za`, pass).then(res => {
                var user = res.user;
                localStorage.setItem('logged', true);
                localStorage.setItem('user', JSON.stringify(user));
                window.location.reload();
            });
        }catch(e){
            alert(e);
        }
        }else{
            alert("Invalid details. Password must be longer than 6 characters")
        }
    }

    render(){
        return(
            <div className="bottom-form">
                <center>
                <input className="default-input" type="number" onInput={(event)=>{this.setState({cell: event.target.value})}} placeholder="Mobile Number"/><br/>
                <input className="default-input" type="password" placeholder="Password (Minimum 6 Char)" onInput={(event)=>{this.setState({pass: event.target.value})}}/><br/>
                <button className="affirm-button" onClick={()=>this.loginOrCreateAccount()}>{this.state.text}</button>
                </center>
            </div>
        );
    }
}