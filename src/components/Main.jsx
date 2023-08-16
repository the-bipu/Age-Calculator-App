import React from "react"
import Footer from "./Footer"

export default function Main() {

    function Clicked(){
        console.log("Clicked!");
    }

    return (
        <div className="container-main">
            <div className="container">

                <div className="con1-div1">
                    <div className="con1-div1-1">
                        <div className="con1-div1-1-1">Day</div>
                        <div className="con1-div1-1-2">
                            <input className="input--1" type="text" name="day" placeholder="DD" />
                        </div>
                    </div>

                    <div className="con1-div1-2">
                        <div className="con1-div1-2-1">Month</div>
                        <div className="con1-div1-2-2">
                            <input className="input--2" type="text" name="month" placeholder="MM" />
                        </div>
                    </div>

                    <div className="con1-div1-3">
                        <div className="con1-div1-3-1">Year</div>
                        <div className="con1-div1-3-2">
                            <input className="input--3" type="text" name="year" placeholder="YYYY" />
                        </div>
                    </div>

                    <div type="submit" className="con1-div1-4" onClick={Clicked}>
                        
                    </div>
                </div>

                <div className="con1-div2">
                    <div className="con1-div2-1">
                        <div className="con1-div2-1-1"><span className="span-1">--</span>years</div>
                    </div>

                    <div className="con1-div2-2">
                        <div className="con1-div2-2-1"><span className="span-2">--</span>months</div>
                    </div>

                    <div className="con1-div2-3">
                        <div className="con1-div2-3-1"><span className="span-3">--</span>days</div>
                    </div>
                </div>

        </div>
            <Footer />
        </div>
    )
}
