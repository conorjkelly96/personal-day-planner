const workingHours = [
  {
    Hour: "9am",
    Event: $("#user-input"),
  },
];

const onLoad = function () {
  // on record load, check local storage
  checkLocalStorage();

  //Render Clock
  renderClock();

  //Render Hour Block
  renderHourBlocks();

  //set Present / Future color coordination
  isPresent();
};

const checkLocalStorage = function () {
  const dataFromLS = localStorage.getItem("user-input");

  if (!dataFromLS) {
    console.log("no data");
  } else {
    console.log("data");
  }
};

const renderClock = function () {
  function update() {
    $("#clock").html(moment().format("D. MMMM YYYY H:mm:ss"));
  }

  setInterval(update, 1000);
};

const renderHourBlocks = function () {
  // render hour blocks
  const userInput = $("<textarea/>").attr("id", "user-event");

  const timeLabel = $("<label>", {
    name: "user-event",
    id: "user-event",
    class: "time-of-day",
  });

  const saveBtn = $("<button/>", {
    text: "Save Event",
    id: "save-btn",
    class: "saveBtn",
  });

  const eventContainer = $("<div>", {
    class: "event-container",
  });

  eventContainer.append(timeLabel, userInput, saveBtn);
  const container = $("#container");
  container.append(eventContainer);
};

const isPresent = function () {
  // if present - set color to --mango
  //  if false - set color to --orange-pantone
};

onLoad();
