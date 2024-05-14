let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date=("0" +date_ob.getDate()).slice(-2); 

// current month
let month = ("0" +(date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// curent hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// currents seconda
let seconds = date_ob.getSeconds();

// print date in YYYY-MM-DD format
console.log(year  + "-" + month + "-" + date);

// prints date & time in YYYY -MM -DD :HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds );
// prints time in HH:MM format
console.log(hours + ":" + minutes)