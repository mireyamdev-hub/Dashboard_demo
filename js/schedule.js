var dp = new DayPilot.Calendar("dp");

// view
dp.startDate = "2021-03-25";
dp.viewType = "Week";

// event creating
dp.onTimeRangeSelected = function (args) {
    var name = prompt("New event name:", "Event");
    if (!name) return;
    var e = new DayPilot.Event({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        text: name
    });
    dp.events.add(e);
    dp.clearSelection();
};

/*dp.onEventClick = function (args) {
    alert("clicked: " + args.e.id());
};*/
dp.eventDeleteHandling = "Update";
  dp.onEventDelete = function(args) {
    if (!confirm("Do you really want to delete this event?")) {
      args.preventDefault();
    }
  };


dp.init();

var e = new DayPilot.Event({
    start: new DayPilot.Date("2021-03-25T12:00:00"),
    end: new DayPilot.Date("2021-03-25T12:00:00").addHours(3),
    id: DayPilot.guid(),
    text: "L.A"
});
dp.events.add(e);


  
