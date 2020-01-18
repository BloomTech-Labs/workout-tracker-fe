import Navbar from "./Navbar";
import React from 'react';
import NavBarStyle from "../styles/NavBarStyle";
import AboutUsStyleSection from "../styles/AboutUsSection"

function AvoutUs(props) {


    return (
    <div>
        <Navbar />
        <AboutUsStyleSection>
        <NavBarStyle/>
        <div class="container">
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
                 He began coursework at Lambda school March 18th, 2019.</p>
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
                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            </div>
        </div>
        </AboutUsStyleSection>

        <AboutUsStyleSection>
        <div class="container members-second-section">
            <div class='member-section'>
                <div class='member-header'>
                    <div class='member-image'>
                        <img src='https://avatars1.githubusercontent.com/u/37605462?s=400&v=4'/>
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
                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
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
                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum t</p>
            </div>
            </div>
        </AboutUsStyleSection>


    </div>
    )
}


export default AvoutUs