const workingHours = [
  {
    hour: "09:00",
    event: $("#user-input"),
  },
  {
    hour: "10:00",
    event: $("#user-input"),
  },
  {
    hour: "11:00",
    event: $("#user-input"),
  },
  {
    hour: "12:00",
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

const activitiesByHour = [];

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
  const dataFromLS = localStorage.getItem("activitiesByHour");
  const activitiesByHour = [];
  if (!dataFromLS) {
    console.log("no data");
    localStorage.setItem("activitiesByHour", JSON.stringify(activitiesByHour));
  }
  // do i need an else here if i'm just checking local storage? Leave the getting part to the save function?
  // else {
  //   console.log("data");
  //   // localStorage.getItem("activitiesByHour", JSON.parse(activitiesByHour));
  // }
};

const renderClock = function () {
  function update() {
    $("#clock").html(moment().format("DD MMMM YYYY H:mm:ss"));
  }

  setInterval(update, 1000);
};

const constructHourBlocks = function () {
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

  const saveData = function () {
    // // target the text area field
    // const event = document.getElementById("user-event");
    // const hour = sx;
    // // const savingData = activitiesByHour.push(input);
    // localStorage.setItem("activitiesByHour", JSON.stringify());
  };

  const onClick = document.getElementById("save-btn");
  onClick.addEventListener("click", saveData);
  console.log("click", onClick);
};

const isPresent = function () {
  // if present - set color to --mango
  //  if false - set color to --orange-pantone
};

onLoad();
