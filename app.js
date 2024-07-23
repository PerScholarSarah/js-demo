const runOurStuff = () =>{

    // 1. Create 10 variables

    let year = 2024;
    let month = 7;
    let day = 23;

    let myFirstName = "Sarah";
    let myLastName = "Wong";
    let city = "Pittsburgh";
    let state = "PA";

    let language = "JavaScript";
    let organization = "PerScholas";

    let birthday = {day: 17, month: 4, year: 2000};

    // 2. Perform calculations(*operator) on vars and create new Vars

    let monthsTilMyBDay = birthday.month - month;
    let daysTilMyBDay = birthday.day - day;
    let age = year - birthday.year;
    let ageInDays = age * 365;

    // 3. Create 3 if Statements and test their outputs in console.
    if(monthsTilMyBDay === 0){
        if(daysTilMyBDay === 0){
            console.log("Wow! Today is my birthday!");
        }
        else if(daysTileMyBDay < 0){
            console.log("My birthday already happened this month.");
        }
        else{
            console.log("My birthday is later this month.");
        }
    }
    else if(monthsTilMyBDay < 0){
        console.log("My birthday was earlier this year.");
    }
    else{
        console.log("My birthday is later this year.");
    }

    
    // 4. Use 2 Logical Operators
    if(myFirstName === "Sarah" && myLastName === "Wong"){
        console.log("I made this program!");
    }
    else if(city === "Pittsburgh" && state === "PA"){
        console.log("I'm in the same city as Sarah");
    }
    else{
        console.log("I'm not Sarah, and I don't live in her city");
    }

    // 5. Interpolate All 10 of your variables in a console log
    console.log(`I am ${myFirstName} ${myLastName}. Today is ${month}/${day}/${year}. I live in ${city}, ${state}. I am learning ${language} at ${organization}. My birthday is ${birthday.month}/${birthday.day}/${birthday.year}`);

}