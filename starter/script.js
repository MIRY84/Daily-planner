//Display the current day at the top of the calender when a user opens the planner.
var currentDay = moment().format("D MMM YYYY");
$("#currentDay").text(currentDay);



function dispalyPlanner() {
    // Present timeblocks for standard business hours when the user scrolls down.
    var timeblock = $("<div>").attr("class", "time-block", "container")
    $(".container").append(timeblock)
    // changed hours to single numbers
    var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    // create a loop
    for (i = 0; i < hours.length; i++) {
        row = $("<div>").attr("class", "row");
        timeblock.append(row)


        let hour = $("<div>").attr("class", "hour col-sm-1");
        // created a if statement to go through am/pm // made sure they are numbers!parseint!
        if (parseInt(hours[i]) < 12) {
            hour.text(hours[i] + "am");
        } else {
            hour.text(hours[i] + "pm");
        }

        row.append(hour);

        //trying to append textarea
        var textarea = $("<textarea>")
        textarea.attr("class", "textarea col-sm-10");
        row.append(textarea);
        var saveButton = $("<button>")
        saveButton.attr('class', 'col-sm-1 saveBtn fa fa-save', "saveBtn");
        row.append(saveButton);
        // Color-code each timeblock based on past, present, and future when the timeblock is viewed.
        var time = moment().format("HH");

        if (parseInt(hours[i]) === parseInt(time)) {
            timeblock.attr("class", "present");
        } else if (parseInt(hours[i]) > parseInt(time)) {
            timeblock.attr("class", "future");
        }
        else if (parseInt(hours[i]) < parseInt(time)) {
            timeblock.attr("class", "past");
        }

        //created a savestorage button
        saveButton.on("click", function (e) {
            // save event to localStorage
            localStorage.setItem("event" + hours[i], JSON.stringify(textarea.val()));
        })
    }
};

dispalyPlanner();

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page