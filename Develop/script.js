// Todays day and Date
var todayDate = moment().format('dddd, MMM Do YYYY hh:mm');
$("#currentDay").html(todayDate);

$('button').click(function () {
    console.log("you did it!!")
    saveData();
});

$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var value = $(this).siblings('.taskValue').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, value);
        console.log(localStorage);
    })
});

function saveData(){
    var time = document.querySelector("#hour9").value;
    var input = document.querySelector("#task9").value;

    localStorage.setItem("hour9", time);
    localStorage.setItem("task9", input);
}
var timeOfDay = document.querySelector("#hour9");
var taskOfDay = document.querySelector("#task9");

function loadData(){
    var currentTime = localStorage.getItem("#hour9").value;
    var timeInput = localStorage.getItem("task9").value;

    timeOfDay.textContent = currentTime;
    taskOfDay.textContent = timeInput;
}

loadData();

// change color for current time, past time, and furture timne. 
function colorTime() {
    var blockTime = 9;
    var currentHour = moment().hours();
    $('.block').each(function () {
        console.log(currentHour);//console logs for bug fixing. 
        console.log(blockTime);
        if (blockTime < currentHour) {
            $(this).addClass('past');
        } else if (blockTime === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
        blockTime += 1
    });
}

colorTime();

// to check time to see if block colors should be updated. 
var interval = setInterval(colorTime, 15000);