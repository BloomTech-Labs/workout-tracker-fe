import React, { Component } from "react";
import Navbar from "./Navbar";
import "../css/about-us.css"
import { render } from "react-dom";

class AvoutUs extends Component {

    render() {
        return (
        <div>
        <Navbar />

        <div class="container-about">
            <div class='member-section'>
                <div class='member-header'>
                    <div class='member-image'>
                        <img src='https://avatars1.githubusercontent.com/u/48810585?s=400&u=6a4f95e22581fd61a8be320f196765714a9faa69&v=4'/>
                    </div>
                    <div class='member-name'>
                        <h1>Matheus Silva</h1>
                        <h2>Developer</h2>
                    </div>
                    <div class='member-social'>
                        <a src='https://github.com/heuzin' title='GitHub'>
                            <image src='img/github.png' class='github'/>
                        </a>
                    </div>
                </div>
                <p>Matheus Silva was born in Massachusetts, USA, raised in Brazil, and recently living in Connecticut, United States.
                 He began coursework at Lambda school March of 2019.</p>
            </div>

            <div class='member-section'>
                <div class='member-header'>
                    <div class='member-image'>
                        <img src='https://avatars0.githubusercontent.com/u/45810067?s=400&v=4'/>
                    </div>
                    <div class='member-name'>
                        <h1>Sir Williams</h1>
                        <h2>Developer</h2>
                    </div>
                    <div class='member-social'>
                        <a src='https://github.com/WayneMitt' title='GitHub'>
                            <image src='img/github.png' class='github'/>
                        </a>
                    </div>
                </div>
                <p>Sir Williams was born in the small town of Pendleton, Oregon. Sir started his schooling for lambda in March 2019. 
                He likes to mess around with minecraft commands and read One Piece.</p>
            </div>
        </div>

        <div class="container-about members-second-section">
            <div class='member-section'>
                <div class='member-header'>
                    <div class='member-image'>
                        <img src='https://ca.slack-edge.com/T4JUEB3ME-UD0RRA3TP-6c7bc87398da-512'/>
                    </div>
                    <div class='member-name'>
                        <h1>Rod Bromberg</h1>
                        <h2>Developer</h2>
                    </div>
                    <div class='member-social'>
                        <a src='https://github.com/WayneMitt' title='GitHub'>
                            <image src='img/github.png' class='github'/>
                        </a>
                    </div>
                </div>
                <p>Rod Bromberg was born in the city of Peekskill, Ny and lives there with his wife and two children.
                 In his free time he enjoys playing Total War, and reading anything history related.</p>
            </div>

            <div class='member-section'>
                <div class='member-header'>
                    <div class='member-image'>
                        <img src='https://avatars0.githubusercontent.com/u/35717693?s=400&v=4'/>
                    </div>
                    <div class='member-name'>
                        <h1>Christopher Wernli</h1>
                        <h2>Developer</h2>
                    </div>
                    <div class='member-social'>
                        <a src='https://github.com/WayneMitt' title='GitHub'>
                            <image src='img/github.png' class='github'/>
                        </a>
                    </div>
                </div>
                <p>Christopher Wernli was born and raised in Utah, USA and lives there with his wife and two kids. 
                He works at a software company as an account manager which is how he got into coding. He start at Lambda in March of 2019.</p>
            </div>
        </div>
    </div>
    );
    }
}


export default AvoutUs