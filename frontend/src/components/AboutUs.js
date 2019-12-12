import Navbar from "./Navbar";
import React from 'react';
import SignupStyle from "../styles/index";

function AvoutUs(props) {


    return (
    <div>
        <Navbar/>
        
        
        <SignupStyle>
        <div class="container">
            <div class='member-section'>
                <div class='member-header'>
                    <div class='member-image'>
                        <image src='img/matheus.jpg'/>
                    </div>
                    <div class='member-name'>
                        <h1>Matheus Silva</h1>
                        <h2>UI Developer</h2>
                    </div>
                    <div class='member-social'>
                        <a src='https://github.com/heuzin' title='GitHub'>
                            <image src='img/github.png' class='github'/>
                        </a>
                    </div>
                </div>
                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
            </div>
            <div class='member-section'>
                <div class='member-header'>
                    <div class='member-image'>
                        <image src='img/wayne.png'/>
                    </div>
                    <div class='member-name'>
                        <h1>Sir Williams</h1>
                        <h2>UI Developer</h2>
                    </div>
                    <div class='member-social'>
                        <a src='https://github.com/WayneMitt' title='GitHub'>
                            <image src='img/github.png' class='github'/>
                        </a>
                    </div>
                </div>
                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
            </div>
        </div>
        
        </SignupStyle>

    </div>
    )
}


export default AvoutUs