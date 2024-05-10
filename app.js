
function age() {
    let date = document.getElementById("date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();
    let age = currentYear - parseInt(year);

    if (currentMonth < parseInt(month) || (currentMonth == parseInt(month) && currentDate < parseInt(date))) {
        age--;
    }

    document.querySelector(".age").innerHTML = `Your age is ${age} years` ;
}
