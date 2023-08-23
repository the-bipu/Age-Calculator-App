import React from "react"
import Footer from "./Footer"

function findAge(currentDate, birthDate) {
    let currentDay = currentDate[0];
    let currentMonth = currentDate[1];
    let currentYear = currentDate[2];
    let birthDay = birthDate[0];
    let birthMonth = birthDate[1];
    let birthYear = birthDate[2];

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
    return [calculatedDay, calculatedMonth, calculatedYear];
}

export default function Main() {

    // State for input values
    const [days, setDays] = React.useState('--');
    const [months, setMonths] = React.useState('--');
    const [years, setYears] = React.useState('--');

    const [newDays, setNewDays] = React.useState(days);
    const [newMonths, setNewMonths] = React.useState(months);
    const [newYears, setNewYears] = React.useState(years);

    // Current date components
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    console.log(currentDay + " " + currentMonth + " " + currentYear);

    const handleDaysChange = (event) => {
        setDays(event.target.value);
    }
    const handleMonthChange = (event) => {
        setMonths(event.target.value);
    }
    const handleYearChange = (event) => {
        setYears(event.target.value);
    }

    const handleClick = () => {
        const birthDate = [parseInt(days), parseInt(months), parseInt(years)];

        const [calculatedDay, calculatedMonth, calculatedYear] = findAge(
            [currentDay, currentMonth, currentYear],
            birthDate
        );

        setNewDays(calculatedDay);
        setNewMonths(calculatedMonth);
        setNewYears(calculatedYear);
    };

    return (
        <div className="container-main">
            <div className="container">

                <div className="con1-div1">
                    <div className="con1-div1-1">
                        <div className="con1-div1-1-1">Day</div>
                        <div className="con1-div1-1-2">
                            <input className="input--1" type="text" name="day" placeholder="DD" 
                            onChange={handleDaysChange} />
                        </div>
                    </div>

                    <div className="con1-div1-2">
                        <div className="con1-div1-2-1">Month</div>
                        <div className="con1-div1-2-2">
                            <input className="input--2" type="text" name="month" placeholder="MM" 
                            onChange={handleMonthChange} />
                        </div>
                    </div>

                    <div className="con1-div1-3">
                        <div className="con1-div1-3-1">Year</div>
                        <div className="con1-div1-3-2">
                            <input className="input--3" type="text" name="year" placeholder="YYYY" 
                            onChange={handleYearChange} />
                        </div>
                    </div>

                    <div type="submit" className="con1-div1-4" onClick={handleClick}>
                        
                    </div>
                </div>

                <div className="con1-div2">
                    <div className="con1-div2-1">
                        <div className="con1-div2-1-1"><span className="span-1">{newYears}</span> years</div>
                    </div>

                    <div className="con1-div2-2">
                        <div className="con1-div2-2-1"><span className="span-2">{newMonths}</span> months</div>
                    </div>

                    <div className="con1-div2-3">
                        <div className="con1-div2-3-1"><span className="span-3">{newDays}</span> days</div>
                    </div>
                </div>

        </div>
            <Footer />
        </div>
    )
}
