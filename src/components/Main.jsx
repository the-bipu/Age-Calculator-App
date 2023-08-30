import React from "react"
import Footer from "./Footer"

const warningString = "Must be a valid date";
const emptyField = "This field is required";

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
        currentYear = currentYear - 1;
        currentMonth = currentMonth + 12;
    }

    const calculatedDay = currentDay - birthDay;
    const calculatedMonth = currentMonth - birthMonth;
    const calculatedYear = currentYear - birthYear;

    console.log("Years: " + calculatedYear + " Months: " + calculatedMonth + " Days: " + calculatedDay);
    return [calculatedDay, calculatedMonth, calculatedYear];
}

export default function Main() {

    // For checking empty fields
    const [isEmptyDate, setIsEmptyDate] = React.useState(false);
    const [isEmptyMonth, setIsEmptyMonth] = React.useState(false);
    const [isEmptyYear, setIsEmptyYear] = React.useState(false);

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

    const [dateFull, setDateFull] = React.useState("");
    const [isValidDate, setIsValidDate] = React.useState(true);

    const [monthFull, setMonthFull] = React.useState("");
    const [isValidMonth, setIsValidMonth] = React.useState(true);

    const [yearFull, setYearFull] = React.useState("");
    const [isValidYear, setIsValidYear] = React.useState(true);

    const handleDaysChange = (event) => {
        const dateFull = event.target.value;
        setDateFull(dateFull);

        if(dateFull <=0 || dateFull > 31){
            setIsValidDate(false);
        } else {
            setIsValidDate(true);
            setDays(event.target.value);
            setIsEmptyDate(false);
        }
    }

    const handleMonthChange = (event) => {
        const monthFull = event.target.value;
        setMonthFull(monthFull);

        if(monthFull <=0 || monthFull > 12){
            setIsValidMonth(false);
        } else {
            setIsValidMonth(true);
            setMonths(event.target.value);
            setIsEmptyMonth(false);
        }
    }

    const handleYearChange = (event) => {
        const yearFull = event.target.value;
        setYearFull(yearFull);

        if(yearFull > currentYear){
            setIsValidYear(false);
        } else {
            setIsValidYear(true);
            setYears(event.target.value);
            setIsEmptyYear(false);
        }
    }

    const handleClick = () => {

        if(dateFull.trim()===""){
            setIsEmptyDate(dateFull.trim() === "");
        } 
        
        if (monthFull.trim()===""){
            setIsEmptyMonth(monthFull.trim() == "");
        } 
        
        if (yearFull.trim()===""){
            setIsEmptyYear(yearFull.trim() === "");
        } 
        
        if(dateFull.trim()!="" && monthFull.trim()!="" && yearFull.trim()!=""){
            let birthDate = [parseInt(days), parseInt(months), parseInt(years)];

            const [calculatedDay, calculatedMonth, calculatedYear] = findAge(
                [currentDay, currentMonth, currentYear],
                birthDate
            );

            if(isValidDate && isValidMonth && isValidYear){
                setNewDays(calculatedDay);
                setNewMonths(calculatedMonth);
                setNewYears(calculatedYear);
            }
        }

    };

    return (
        <div className="container-main">
            <div className="container">

                <div className="con1-div1">
                    <div className={`con1-div1-1 ${!isValidDate ? "container-spacing" : ""}`}>
                        <div className={`con1-div1-1-1 ${!isValidDate || isEmptyDate ? "con1-div1-text" : ""} : ""}`}>Day</div>
                        <div className="con1-div1-1-2">
                            <input className={`input--1 ${!isValidDate || isEmptyDate ? "warningDate PH" : ""}`} type="text" name="day" placeholder="DD" 
                            onChange={handleDaysChange} />
                        </div>
                        <div className={`con1-div1-1-3 ${!isValidDate ? "warning" : ""}`}>
                            {warningString}
                        </div>
                        <div className={`con1-div1-1-4 ${isEmptyDate ? "empty" : ""}`}>
                            {emptyField}
                        </div>
                    </div>

                    <div className={`con1-div1-2 ${!isValidMonth ? "container-spacing" : ""}`}>
                        <div className={`con1-div1-2-1 ${!isValidMonth || isEmptyMonth ? "con1-div1-text" : ""}`}>Month</div>
                        <div className="con1-div1-2-2">
                            <input className={`input--2 ${!isValidMonth || isEmptyMonth ? "warningDate PH" : ""}`} type="text" name="month" placeholder="MM" 
                            onChange={handleMonthChange} />
                        </div>
                        <div className={`con1-div1-1-3 ${!isValidMonth ? "warning" : ""}`}>
                            Must be a valid month
                        </div>
                        <div className={`con1-div1-1-4 ${isEmptyMonth ? "empty" : ""}`}>
                            {emptyField}
                        </div>
                    </div>

                    <div className={`con1-div1-3 ${!isValidYear ? "container-spacing" : ""}`}>
                        <div className={`con1-div1-3-1 ${!isValidYear || isEmptyYear ? "con1-div1-text" : ""}`}>Year</div>
                        <div className="con1-div1-3-2">
                            <input className={`input--3 ${!isValidYear || isEmptyYear ? "warningDate PH" : ""}`} type="text" name="year" placeholder="YYYY" 
                            onChange={handleYearChange} />
                        </div>
                        <div className={`con1-div1-1-3 ${!isValidYear ? "warning" : ""}`}>
                            Must be in the past
                        </div>
                        <div className={`con1-div1-1-4 ${isEmptyYear ? "empty" : ""}`}>
                            {emptyField}
                        </div>
                    </div>

                    <div type="submit" className={`con1-div1-4 ${!isValidYear ? "container-4-spacing" : ""}`} 
                    onClick={handleClick}>
                        
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
