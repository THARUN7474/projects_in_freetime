window.addEventListener("load", () => {
  clock();
  function clock() {
    const today = new Date();

    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    // console.log(hours, minutes, seconds);

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    // console.log(year, month, day);

    const hrr = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    const hr = hrr > 12 ? hours - 12 : hours;
    const amPm = hours < 12 ? "AM" : "PM";

    // console.log(hr, amPm);

    const monthList = [
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

    //get current date and time
    const date = monthList[month - 1] + " " + day + ", " + year;

    // const date = month + "," + day + ", " + year;
    const time = hrr + ":" + minute + ":" + second + " " + amPm;

    //combine current date and time
    const dateTime = date + " - " + time;

    //print current date and time to the DOM
    document.getElementById("date-time").innerHTML = dateTime;
    setTimeout(clock, 1000);
  }
});

// window.addEventListener("load", () => {
//     clock();
//     function clock() {
//       const today = new Date();

//       // get time components
//       const hours = today.getHours();
//       const minutes = today.getMinutes();
//       const seconds = today.getSeconds();

//       //add '0' to hour, minute & second when they are less 10
//       const hour = hours < 10 ? "0" + hours : hours;
//       const minute = minutes < 10 ? "0" + minutes : minutes;
//       const second = seconds < 10 ? "0" + seconds : seconds;

//       //make clock a 12-hour time clock
//       const hourTime = hour > 12 ? hour - 12 : hour;

//       //assigning 'am' or 'pm' to indicate time of the day
//       const ampm = hour < 12 ? "AM" : "PM";

//       // get date components
//       const month = today.getMonth();
//       const year = today.getFullYear();
//       const day = today.getDate();

//       //declaring a list of all months in  a year
//       const monthList = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December"
//       ];

//       //get current date and time
//       const date = monthList[month] + " " + day + ", " + year;
//       const time = hourTime + ":" + minute + ":" + second + ampm;

//       //combine current date and time
//       const dateTime = date + " - " + time;

//       //print current date and time to the DOM
//       document.getElementById("date-time").innerHTML = dateTime;
//       setTimeout(clock, 1000);
//     }
//   });
