function mainBtn() {
    let time = getTimeStr();
    let day = getDayStr();
    let btnSubmit = document.getElementById("appointment-btn");
    if (day === 0) {
      alert("It is holiday");

      return false;
    } else if (day === 1) {
      if (compareTimeMTWDTH(time) === false) {
        alert("Please Choose another time");

        return false;
      }
    } else {
      if (compareTimeFri(time) === false) {
        alert("Please Choose another time");

        return false;
      }
    }
    return true;
  }
  function getDayStr() {
    let dateInput = document.getElementById("date-box").value;
    let date = new Date(dateInput);
    let dayStr = date.getDay();
    let a;
    switch (dayStr) {
      case 0:
      case 6:
        a = 0; // weekend
        break;
      case 1:
      case 2:
      case 3:
      case 4:
        a = 1; // non friday
        break;

      default:
        a = 2; // friday
        break;
    }

    //document.getElementById("demo").innerHTML = a;
    return a;
  }

  function getTimeStr() {
    let x = document.getElementById("myTime").value;
    let a = x.slice(0, 2);
    let b = x.slice(3);
    let timeX = a + b;
    //document.getElementById("demo").innerHTML = timeX;
    return timeX;
  }

  function compareTimeMTWDTH(timeStr) {
    let startWork = 800;
    let startRest = 1300;
    let endRest = 1400;
    let endWork = 1700;
    let time = parseInt(timeStr);
    return (
      (time >= startWork && time < startRest) ||
      (time >= endRest && time < endWork)
    );
  }

  function compareTimeFri(timeStr) {
    let startWork = 800;
    let startRest = 1215;
    let endRest = 1445;
    let endWork = 1700;
    let time = parseInt(timeStr);
    return (
      (time >= startWork && time < startRest) ||
      (time >= endRest && time < endWork)
    );
  }