// Todays day and Date
var todayDate = moment().format('dddd, MMM Do YYYY hh:mm');
$("#currentDay").html(todayDate);

//var saveButton = $(".saveBtn");
var hourNine = $("#hourNine");
var taskNine = $("#textNine");


$(".saveBtn").click(function(event){
    event.preventDefault();
 var taskEvent = {
     time: hourNine.text(),
     task: taskNine.val()
 };
 localStorage.setItem("9", JSON.stringify(taskEvent));


})

function loadData() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

         console.log(currHour);
         //console.log(currPlan);

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}
loadData();


function init(){
    loadData();


}

init();



// change color for current time, past time, and furture timne. 
function colorTime() {
    var blockTime = 9;
    var currentHour = moment().hours();
    $('.plan').each(function () {
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
        //console.log(blockTime);
        console.log(currentHour);
    });
}

colorTime();

// to check time to see if block colors should be updated. 
//var interval = setInterval(colorTime, 15000);