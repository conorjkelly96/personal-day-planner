const workingHours = [
  {
    hour: "09:00am",
    event: $("#user-input"),
  },
  {
    hour: "10:00am",
    event: $("#user-input"),
  },
  {
    hour: "11:00am",
    event: $("#user-input"),
  },
  {
    hour: "12:00am",
    event: $("#user-input"),
  },
  {
    hour: "13:00",
    event: $("#user-input"),
  },
  {
    hour: "14:00",
    event: $("#user-input"),
  },
  {
    hour: "15:00",
    event: $("#user-input"),
  },
  {
    hour: "16:00",
    event: $("#user-input"),
  },
  {
    hour: "17:00",
    event: $("#user-input"),
  },
];

const hour = "9";
const moHour = moment(hour).format("HH");
console.log(moHour);

let currentHourIndex = 0;

const onLoad = function () {
  // on record load, check local storage
  checkLocalStorage();

  //Render Clock
  renderClock();

  //Render Hour Block
  constructHourBlocks();

  //set Present / Future color coordination
  isPresent();
};

const checkLocalStorage = function () {
  const dataFromLS = localStorage.getItem("user-input");
  const activitiesByHour = [];
  if (!dataFromLS) {
    console.log("no data");
    localStorage.setItem("activitiesByHour", JSON.stringify(activitiesByHour));
  } else {
    console.log("data");
    localStorage.getItem("activitiesByHour", JSON.parse(activitiesByHour));
  }
};

const renderClock = function () {
  function update() {
    $("#clock").html(moment().format("DD MMMM YYYY H:mm:ss"));
  }

  setInterval(update, 1000);
};

const constructHourBlocks = function () {
  const currentHour = workingHours[currentHourIndex];
  console.log(currentHour);

  for (let i = 0; i < workingHours.length; i++) {
    const data = workingHours[i];
    const userInput = $("<textarea/>").attr("id", "user-event");
    const timeLabel = $("<label>", {
      name: "time-label",
      id: "time-label",
      class: "time-of-day",
    });
    timeLabel.data("time");
    timeLabel.text(data.hour);

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
  }
};

const isPresent = function () {
  // if present - set color to --mango
  //  if false - set color to --orange-pantone
};

onLoad();
