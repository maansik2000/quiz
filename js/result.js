const name = sessionStorage.getItem("name");
const points = sessionStorage.getItem("points");
const user_time = sessionStorage.getItem("time");


document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = points;
document.querySelector(".time").innerHTML = user_time;


