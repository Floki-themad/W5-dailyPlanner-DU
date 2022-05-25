// Todays day and Date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

//save Button click listner 
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // Get values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save  in local storage
        localStorage.setItem(time, text);
    })