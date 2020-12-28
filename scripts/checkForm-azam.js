let btnSubmit = document.getElementById("");
btnSubmit.onclick = mainBtn;


function mainBtn() {
    let time = getTimeStr();
    let day = getDayStr();
    document.getElementById("demo").innerHTML = day;
    if (day === 0) {
        alert("It is holiday");
    } else if (day === 1) {
        if (!compareTimeMTWDTH(time)) {
            alert("Please Choose another time");
        }
    } else {
        if (!compareTimeFri(time)) {
            alert("Please Choose another time");
        }
    }
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
    let startRest = 1100;
    let endRest = 1300;
    let endWork = 1700;
    let time = parseInt(timeStr);
    return (
        (time >= startWork && time < startRest) ||
        (time >= endRest && time < endWork)
    );
}

function compareTimeFri(timeStr) {
    let startWork = 800;
    let startRest = 1100;
    let endRest = 1300;
    let endWork = 1700;
    let time = parseInt(timeStr);
    return (
        (time >= startWork && time < startRest) ||
        (time >= endRest && time < endWork)
    );
}