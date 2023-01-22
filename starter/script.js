//Display the current day at the top of the calender when a user opens the planner.
var currentDay = moment().format("D MMM YYYY");
$("#currentDay").text(currentDay);




// Present timeblocks for standard business hours when the user scrolls down.
var timeblock = $("<div>").attr("class", "time-block")
$(".container").append(timeblock)
var hours = ["9am","10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
 // create a loop
 for( i=0; i < hours.length; i++) {
    row = $("<div>").attr("class", "row");
    timeblock.append(row)
 }
 let hour = $("<div>").attr("class", "hour");
      
        hour.text(hours[i])
      
        row.append(hour);


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
var time = moment().format("HH:mm:ss");
if (hours[i] === time) {
    timeblock.attr("class","present");
}
if (hours[i]> time) {
    timeblock.attr("class", "past")
}
else if (hours[i]<time) {
    timeblock.attr("class","past")
}

 
//Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page