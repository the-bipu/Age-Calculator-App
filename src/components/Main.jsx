import React from "react"
import Footer from "./Footer"

function findAge(currentDate, birthDate) {
    let [currentDay, currentMonth, currentYear] = currentDate;
    let [birthDay, birthMonth, birthYear] = birthDate;

    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (birthDay > currentDay) {
        currentMonth = currentMonth - 1;
        currentDay += monthDays[birthMonth - 1];
    }

    if (birthMonth > currentMonth) {
        currentYear = currentMonth - 1;
        currentMonth = currentMonth + 12;
    }

    const calculatedDay = currentDay - birthDay;
    const calculatedMonth = currentMonth - birthMonth;
    const calculatedYear = currentYear - birthYear;

    console.log("Years: " + calculatedYear + " Months: " + calculatedMonth + " Days: " + calculatedDay);
}

export default function Main() {

    // State for input values
    const [days, setDays] = React.useState('');
    const [months, setMonths] = React.useState('');
    const [years, setYears] = React.useState('');

    // Current date components
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    // Click handler to calculate age
    const handleClick = () => {
        // Convert input values to numbers
        const birthDate = [parseInt(days), parseInt(months), parseInt(years)];

        // Calculate age
        findAge([currentDay, currentMonth, currentYear], birthDate);
    };

    return (
        <div className="container-main">
            <div className="container">

                <div className="con1-div1">
                    <div className="con1-div1-1">
                        <div className="con1-div1-1-1">Day</div>
                        <div className="con1-div1-1-2">
                            <input className="input--1" type="text" name="day" placeholder="DD" 
                            value={days} 
                            onChange={(e) => setDays(e.target.value)} />
                        </div>
                    </div>

                    <div className="con1-div1-2">
                        <div className="con1-div1-2-1">Month</div>
                        <div className="con1-div1-2-2">
                            <input className="input--2" type="text" name="month" placeholder="MM" 
                            value={months} 
                            onChange={(e) => setMonths(e.target.value)} />
                        </div>
                    </div>

                    <div className="con1-div1-3">
                        <div className="con1-div1-3-1">Year</div>
                        <div className="con1-div1-3-2">
                            <input className="input--3" type="text" name="year" placeholder="YYYY" 
                            value={years} 
                            onChange={(e) => setYears(e.target.value)} />
                        </div>
                    </div>

                    <div type="submit" className="con1-div1-4" onClick={handleClick}>
                        
                    </div>
                </div>

                <div className="con1-div2">
                    <div className="con1-div2-1">
                        <div className="con1-div2-1-1"><span className="span-1">{years}</span> years</div>
                    </div>

                    <div className="con1-div2-2">
                        <div className="con1-div2-2-1"><span className="span-2">{months}</span> months</div>
                    </div>

                    <div className="con1-div2-3">
                        <div className="con1-div2-3-1"><span className="span-3">{days}</span> days</div>
                    </div>
                </div>

        </div>
            <Footer />
        </div>
    )
}
