import TeamBuilder from "./images/icon-team-builder.svg";
import Calculator from "./images/icon-calculator.svg";
import Supervisor from "./images/icon-supervisor.svg";
import Karma from "./images/icon-karma.svg";
import React from 'react'

function FourCards() {

    return(

        <main className="flex flex-col justify-center items-center py-[60px] md:h-screen lg:h-auto">

            {/* Content Container */}

            <div className="max-w-[80%] w-[1400px]">

                {/* Main Header */}

                <header className="mainHeader text-center flex flex-col gap-5 pb-[80px] w-[750px] max-w-[100%] my-0 mx-auto">

                    <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] leading-11">Reliable, efficient delivery <br/> <span>Powered by Technology</span></h1>

                    <p className="text-[1rem] sm:text-[1.3rem]">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>

                </header>

                {/* Content Container */}

                <div className="contentContainer grid grid-cols-1 grid-rows-4 grid-flow-col gap-9 md:grid-cols-2 md:grid-rows-2 md:justify-items-stretch lg:grid-rows-3 lg:grid-cols-3">

                    <div className="px-9 py-7 rounded-lg lg:row-start-2 lg:col-end-2">

                        <header className="contentHeader flex flex-col gap-2">

                            <h2 className="text-[1.5rem]">Supervisor</h2>
                            <p className="text-[1rem]">Monitors activity to identify project roadblocks</p>

                        </header>

                        <div className="w-full flex justify-end pt-5">

                            <img src={Supervisor} alt="Supervisor" />

                        </div>

                    </div>

                    <div className="px-9 py-7 rounded-lg lg:col-start-2">

                        <header className="contentHeader flex flex-col gap-2">

                            <h2 className="text-[1.5rem]">Team Builder</h2>
                            <p className="text-[1rem]">Scans our talent network to create the optimal team for your project</p>

                        </header>

                        <div className="w-full flex justify-end pt-5">

                            <img src={TeamBuilder} alt="Team Builder" />

                        </div>

                    </div>

                    <div className="px-9 py-7 rounded-lg lg:row-start-3 lg:col-start-2">

                        <header className="contentHeader flex flex-col gap-2">

                            <h2 className="text-[1.5rem]">Karma</h2>
                            <p className="text-[1rem]">Regularly evaluates our talent to ensure quality</p>

                        </header>

                        <div className="w-full flex justify-end pt-5">

                            <img src={Karma} alt="Karma" />

                        </div>

                    </div>

                    <div className="px-9 py-7 rounded-lg lg:col-end-4 lg:row-start-2">

                        <header className="contentHeader flex flex-col gap-2">

                            <h2 className="text-[1.5rem]">Calculator</h2>
                            <p className="text-[1rem]">Uses data from past projects to provide better delivery estimates</p>

                        </header>

                        <div className="w-full flex justify-end pt-5">

                            <img src={Calculator} alt="Calculator" />

                        </div>

                    </div>

                </div>

            </div>

        </main>

    )
}

export default FourCards;