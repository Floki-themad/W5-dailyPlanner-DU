// Todays day and Date
var todayDate = moment().format('dddd, MMM Do YYYY hh:mm');
$("#currentDay").html(todayDate);

//var saveButton = $(".saveBtn");
var hourNine = $("#hourNine");
var taskNine = $("#textNine");
var hourTen = $("#hourTen");
var taskTen = $("#textTen");
var hourEleven = $("#hourEleven");
var taskEleven = $("#textEleven");
var hourTwevle = $("#hourTwevle");
var taskTwevle = $("#textTwevle");
var hourOne = $("#hourOne");
var taskOne = $("#textOne");
var hourTwo = $("#hourTwo");
var taskTwo = $("#textTwo");
var hourThree = $("#hourThree");
var taskThree = $("#textThree");
var hourFour = $("#hourFour");
var taskFour = $("#textFour")
var hourFive = $("#hourFive");
var taskFive = $("#textFive");


$(".saveBtn").click(function(event){
    event.preventDefault();
 var taskEventNine = {
     time: hourNine.text(),
     task: taskNine.val()
 };
 var taskEventTen = {
    time: hourTen.text(),
    task: taskTen.val()
};
var taskEventEleven = {
    time: hourEleven.text(),
    task: taskEleven.val()
};
var taskEventTwevle = {
    time: hourTwevle.text(),
    task: taskTwevle.val()
};
var taskEventOne = {
    time: hourOne.text(),
    task: taskOne.val()
};
var taskEventTwo = {
    time: hourTwo.text(),
    task: taskTwo.val()
};
var taskEventThree = {
    time: hourThree.text(),
    task: taskThree.val()
};
var taskEventFour = {
    time: hourFour.text(),
    task: taskFour.val()
};
var taskEventFive = {
    time: hourFive.text(),
    task: taskFive.val()
};
 localStorage.setItem("9", JSON.stringify(taskEventNine));
 localStorage.setItem("10", JSON.stringify(taskEventTen));
 localStorage.setItem("11", JSON.stringify(taskEventEleven));
 localStorage.setItem("12", JSON.stringify(taskEventTwevle));
 localStorage.setItem("13", JSON.stringify(taskEventOne));
 localStorage.setItem("14", JSON.stringify(taskEventTwo));
 localStorage.setItem("15", JSON.stringify(taskEventThree));
 localStorage.setItem("16", JSON.stringify(taskEventFour));
 localStorage.setItem("17", JSON.stringify(taskEventFive));


})

function loadData() {

    $(".plan").each(function() {
        var thisHour = $(this).data("hour")
        console.log(thisHour)
         var storedNote = JSON.parse(localStorage.getItem(thisHour));
         console.log(storedNote)
        $(this).text(storedNote.task)
        console.log(storedNote.task)
        // if(currPlan) {
        //     $(this).siblings(".plan").val(currPlan);
        // }
    });
}


function init(){
    loadData();


}

init();



// change color for current time, past time, and furture timne. 
function colorTime() {
    var blockTime = 9;
    var currentHour = moment().hours();
    $(".plan").each(function () {
        if (blockTime < currentHour) {
            console.log()
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
        //console.log(blockTime);
       // console.log(currentHour);
    });
}

colorTime();

// to check time to see if block colors should be updated. 
//var interval = setInterval(colorTime, 15000);