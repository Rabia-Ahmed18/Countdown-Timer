var date_ob = new Date();
// current date
// adjust 0 before single digit date
var date = ("0" + date_ob.getDate()).slice(-2);
// current month
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// current year
var year = date_ob.getFullYear();
// curent hours
var hours = date_ob.getHours();
// current minutes
var minutes = date_ob.getMinutes();
// currents seconda
var seconds = date_ob.getSeconds();
// print date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);
// prints date & time in YYYY -MM -DD :HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
// prints time in HH:MM format
console.log(hours + ":" + minutes);
