import React from "react"
import Footer from "./Footer"

export default function Main() {
    return (
        <div class="container-main">
            <div class="container">

                <div class="con1-div1">
                    <div class="con1-div1-1">
                        <div class="con1-div1-1-1">Day</div>
                        <div class="con1-div1-1-2">
                            <input class="input--1" type="text" placeholder="DD" />
                        </div>
                    </div>

                    <div class="con1-div1-2">
                        <div class="con1-div1-2-1">Month</div>
                        <div class="con1-div1-2-2">
                            <input class="input--2" type="text" placeholder="MM" />
                        </div>
                    </div>

                    <div class="con1-div1-3">
                        <div class="con1-div1-3-1">Year</div>
                        <div class="con1-div1-3-2">
                            <input class="input--3" type="text" placeholder="YYYY" />
                        </div>
                    </div>

                    <div class="con1-div1-4">
                        
                    </div>
                </div>

                <div class="con1-div2">
                    <div class="con1-div2-1">
                        <div class="con1-div2-1-1"><span class="span-1">--</span>years</div>
                    </div>

                    <div class="con1-div2-2">
                        <div class="con1-div2-2-1"><span class="span-2">--</span>months</div>
                    </div>

                    <div class="con1-div2-3">
                        <div class="con1-div2-3-1"><span class="span-3">--</span>days</div>
                    </div>
                </div>

        </div>
            <Footer />
        </div>
    )
}
