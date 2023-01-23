//Display the current day at the top of the calender when a user opens the planner.
var currentDay = moment().format("D MMM YYYY");
$("#currentDay").text(currentDay);



function dispalyPlanner() {
    // Present timeblocks for standard business hours when the user scrolls down.
    var timeblock = $("<div>").attr("class", "time-block")
    $(".container").append(timeblock)
    // changed hours to single numbers
    var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    // create a loop
    for (i = 0; i < hours.length; i++) {
        row = $("<div>").attr("class", "row");
        timeblock.append(row)

        let hour = $("<div>").attr("class", "hour");
        // created a if statement to go through am/pm // made sure they are numbers!parseint!
        if (parseInt(hours[i]) < 12) {
            hour.text(hours[i] + "am");
        } else {
            hour.text(hours[i] + "pm");
        }

        row.append(hour);

        //trying to append textarea

        var textarea = $("<textarea>")
        textarea.attr("class", "textarea");
        row.append(textarea);
        // Color-code each timeblock based on past, present, and future when the timeblock is viewed.
        var time = moment().format("HH");

        if (parseInt(hours[i]) === parseInt(time)) {
            row.attr("class", "present");
        } else if (parseInt(hours[i]) > parseInt(time)) {
            row.attr("class", "future");
        }
        else if (parseInt(hours[i]) < parseInt(time)) {
            row.attr("class", "past");
        }
    }
}


//Allow a user to enter an event when they click a timeblock
// timeblock.on('click', function () {
var time = moment().format("HH:mm:ss");
//console.log(time)

// timeblock.append("textarea");
//    textarea = "";
//})
//}
dispalyPlanner();

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page