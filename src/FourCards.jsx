import TeamBuilder from "./images/icon-team-builder.svg";
import Calculator from "./images/icon-calculator.svg";
import Supervisor from "./images/icon-supervisor.svg";
import Karma from "./images/icon-karma.svg";
import React from 'react'

function FourCards() {

    return(

        <main>

            {/* Content Container */}

            <div>

                {/* Main Header */}

                <header>

                    <h1>Reliable, efficient delivery <br/> <span>Powered by Technology</span></h1>

                    <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>

                </header>

                <div>

                    <div>

                        <header>

                            <h2>Supervisor</h2>
                            <p>Monitors activity to identify project roadblocks</p>

                        </header>

                        <div>

                            <img src={Supervisor} alt="Supervisor" />

                        </div>

                    </div>

                    <div>

                        <header>

                            <h2>Team Builder</h2>
                            <p>Scans our talent network to create the optimal team for your project</p>

                        </header>

                        <div>

                            <img src={TeamBuilder} alt="Team Builder" />

                        </div>

                    </div>

                    <div>

                        <header>

                            <h2>Karma</h2>
                            <p>Regularly evaluates our talent to ensure quality</p>

                        </header>

                        <div>

                            <img src={Karma} alt="Karma" />

                        </div>

                    </div>

                    <div>

                        <header>

                            <h2>Calculator</h2>
                            <p>Uses data from past projects to provide better delivery estimates</p>

                        </header>

                        <div>

                            <img src={Calculator} alt="Calculator" />

                        </div>

                    </div>

                </div>

            </div>

        </main>

    )
}

export default FourCards;