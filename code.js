$(document).ready(function() {
    $("button").click(mySchedule);

    function mySchedule()
    {

        var selectSchedule = $("input[name=schedule]:checked");
        var event;
        var time;

  switch (selectSchedule) {
      case Monday:
          event = "work";
          time = "3 PM to 11PM";
          break;
      case Tuesday  :
          event = "work";
          time = "3 PM to 11PM";
          break;
      case Wednesday  :
          event = "Shopping";
          time = " 4PM to 6PM";
          break;
      case Thursday  :
          event = "Work";
          time = "5 PM to 9PM";
          break;
      case Friday  :
          event = "Yoga";
          time = "1PM to 2PM";
          break;
      case Saturday  :
          event = "Homework";
          time = "11 Am to 5PM";
          break;
      case Sunday  :
          event = "Church";
          time = "4 PM to 5PM";
          break;
      default:
          event = "Error";
          time = "Error";
  }
        // get the data-schedule from the selected radio button
        //var getSchedule = selectSchedule.data("schedule");

        $("#p").text(`Event : ${event}      Time : ${time} `);
    }
});

