const tag = document.querySelector(".days"),
  cur = document.querySelector(".current-date"),
  icons = document.querySelectorAll(".icons span");
//getting new date
let date = new Date(),
  curyear = date.getFullYear(),
  curmonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const renderCalendar = () => {
  let firstDayofMonth = new Date(curyear, curmonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(curyear, curmonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(curyear, curmonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(curyear, curmonth, 0).getDate(); // getting last date of previous month
  let liTag = "";
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i - 1}</li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    let today =
      i === date.getDate() &&
      curmonth === new Date().getMonth() &&
      curyear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${today}">${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  cur.innerText = `${months[curmonth]} ${curyear}`;
  tag.innerHTML = liTag;
};
renderCalendar();
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    curmonth = icon.id === "prev" ? curmonth - 1 : curmonth + 1;
    if (curmonth < 0 || curmonth > 11) {
      date = new Date(curyear, curmonth);
      curmonth = date.getMonth();
      curyear = date.getFullYear();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
