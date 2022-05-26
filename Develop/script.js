// Todays day and Date
var todayDate = moment().format('dddd, MMM Do YYYY hh:mm');
$("#currentDay").html(todayDate);

//page load function. 

// declaring an object to store data based on current task/time. 
let planner = [
    {
        taskNumber: 9,
        taskValue: "", //task value is blank to allow for user input. 
    },
    {
        taskNumber: 10,
        taskValue: "", //task value is blank to allow for user input. 
    },
    {
        taskNumber: 11,
        taskValue: "", //task value is blank to allow for user input. 
    },
    {
        taskNumber: 12,
        taskValue: "", //task value is blank to allow for user input. 
    },
    {
        taskNumber: 1,
        taskValue: "", //task value is blank to allow for user input. 
    },
    {
        taskNumber: 2,
        taskValue: "", //task value is blank to allow for user input. 
    }, 
     {
        taskNumber: 3,
        taskValue: "", //task value is blank to allow for user input. 
    },
    {
        taskNumber: 4,
        taskValue: "", //task value is blank to allow for user input. 
    },
    {
        taskNumber: 5,
        taskValue: "", //task value is blank to allow for user input. 
    },

]
console.log(todayDate)

// change color for current time, past time, and furture timne. 
function colorTime(){
    var currentHour = moment().hours();
    $('.block').each(function(){
        var blockTime = parseInt($(this).attr('id').split('-')[1]);

        if (blockTime < currentHour){
            $(this).addClass('past');
        } else if (blockTime === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}

colorTime();

var interval = setInterval(colorTime, 15000);