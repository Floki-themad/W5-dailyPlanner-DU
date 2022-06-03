// Todays day and Date
var todayDate = moment().format('dddd, MMM Do YYYY hh:mm');
$("#currentDay").html(todayDate);

var saveButton = document.querySelector("#saveButton");
var hourNine = document.querySelector("#hourNine");
var taskNine = document.querySelector("#taskNine");

saveButton.addEventListener("click", function(event){
    event.preventDefault();
 var taskEvent = {
     time: hourNine.value,
     task: taskNine.value.trim()
 };
 localStorage.setItem("taskEvent", JSON.stringify(taskEvent));
})

function loadData() {
    var task = JSON.parse(localStorage.getItem("taskEvent"));
    
    //document.getElementById("#taskNine").textContent = task.taskNine;
 
    
    console.log(task);

 
}

function init(){
    loadData();

}

init();
// $(document).ready(function () {
//     console.log($(document).ready)
//     $('.saveBtn').click(function (e) {
//         e.preventDefault()
//         const value = $("button").closest("#task9").val();
//         const time = $(this).parent().attr('id');
//         localStorage.setItem(time, value);
//     })
// });

// var timeOfDay = document.querySelector("#hour9");
// var taskOfDay = document.querySelector("#task9");

// function loadData(){
//     var currentTime = localStorage.getItem("hour9");
//     var timeInput = localStorage.getItem("task9");
//     console.log(currentTime);
//     taskOfDay.value = currentTime;
    
// }


// change color for current time, past time, and furture timne. 
function colorTime() {
    var blockTime = 9;
    var currentHour = moment().hours();
    $('.block').each(function () {
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
        console.log(blockTime);
        console.log(currentHour);
    });
}

colorTime();

// to check time to see if block colors should be updated. 
//var interval = setInterval(colorTime, 15000);