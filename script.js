const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const data = [
  {
    img:
      "https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg",
    h1: "Get a link you can share",
    para:
      "Click New meeting to get a link you can send to people you wamt to meet with",
  },
  {
    img:
      "https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg",
    h1: "See everyone together",
    para:
      "To see more people at the same time,, go to Change layout in the More options menu",
  },
  {
    img:
      "https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg",
    h1: "Plan ahead",
    para:
      "Click New meeting in Google Calander and send invites ti participants",
  },
  {
    img:
      "https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg",
    h1: "Your meeting is safe",
    para: "No one can join a meeting unless invited or admitted by the host",
  },
];
const d_var = new Date();
console.log(d_var);
const date_span = document.querySelector("#date");
const hour = d_var.getHours();
const day = d_var.getDay();
const mon = d_var.getMonth();
const date = d_var.getDate();
let ks = d_var.toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
let k = document.createTextNode(
  `${ks} • ${weekdays[day]}, ${months[mon]} ${date}`
);
date_span.appendChild(k);
// slider working
const img = document.querySelector(".slider_clip img");
const h1 = document.querySelector(".slider_clip h1");
const p = document.querySelector(".slider_clip p");
var currentData = 0;
const btnRight = document.querySelector("#slider_right_btn");
const btnLeft = document.querySelector("#slider_left_btn");
// const imgElement =document.createElement('img');
btnRight.addEventListener("click", () => {
  currentData++;
  if (currentData <= 3) {
    img.src = data[currentData].img;
    h1.textContent = data[currentData].h1;
    p.textContent = data[currentData].para;
    btnRight.style.display='inline';
  }
  if (currentData>=4) {
    currentData=3;
  }
  console.log(currentData);
});
btnLeft.addEventListener("click", () => {
  if (currentData>0) {
    currentData--;
  }
  if (currentData<=3) {
    img.src = data[currentData].img;
    h1.textContent = data[currentData].h1;
    p.textContent = data[currentData].para;
    // if (currentData == 0) {
    //   btnLeft.style.opacity = "50%";
    // }
  }
 
  
  console.log(currentData);
  console.log("clicked L");
});
