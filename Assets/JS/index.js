const workingHours = [
  {
    hour: "09:00",
    localStorageKey: "9",
    event: $("#user-input"),
  },
  {
    hour: "10:00",
    localStorageKey: "10",

    event: $("#user-input"),
  },
  {
    hour: "11:00",
    localStorageKey: "11",

    event: $("#user-input"),
  },
  {
    hour: "12:00",
    localStorageKey: "12",

    event: $("#user-input"),
  },
  {
    hour: "13:00",
    localStorageKey: "13",

    event: $("#user-input"),
  },
  {
    hour: "14:00",
    localStorageKey: "14",

    event: $("#user-input"),
  },
  {
    hour: "15:00",
    localStorageKey: "15",

    event: $("#user-input"),
  },
  {
    hour: "16:00",
    localStorageKey: "16",

    event: $("#user-input"),
  },
  {
    hour: "17:00",
    localStorageKey: "17",

    event: $("#user-input"),
  },
];

const activitiesByHour = [];

const onLoad = function () {
  // on record load, check local storage
  initializeLocalStorage();

  //Render Clock
  renderClock();

  //Render Hour Block
  constructHourBlocks();

  //set Present / Future color coordination
  // isPresent();
};

const initializeLocalStorage = function () {
  const dataFromLS = localStorage.getItem("activitiesByHour");
  if (!dataFromLS) {
    localStorage.setItem("activitiesByHour", JSON.stringify({}));
  }
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
    const userInput = $("<textarea/>", {
      text: "Testing",
    });
    const timeLabel = $("<label>", {
      name: "time-label",
      id: "time-label",
      class: "time-of-day",
    });
    timeLabel.text(data.hour);

    const saveBtn = $("<button/>", {
      text: "Save Event",
      id: data.localStorageKey,
      class: "saveBtn",
    });
    const eventContainer = $("<div>", {
      class: `event-container ${getTimeBlockClassName(
        parseInt(data.localStorageKey)
      )}`,
    });
    eventContainer.attr("data-time", data.localStorageKey);
    eventContainer.append(timeLabel, userInput, saveBtn);
    const container = $("#container");
    container.append(eventContainer);
  }

  const saveData = function () {
    // target the text area field
    // how about the data attribute
    const event = document.getElementById("user-event");
    // const hour = ;
    // const savingData = activitiesByHour.push(input);
    localStorage.setItem("activitiesByHour", JSON.stringify());
  };

  const btn = document.getElementsByClassName("saveBtn");
  console.log(btn);
  btn.addEventListener("click", saveData);
  console.log("click", btn);
};
const currentHour = 13;

const getTimeBlockClassName = function (hour) {
  if (hour > currentHour) {
    return "future";
  } else if (hour === currentHour) {
    return "present";
  } else {
    return "past";
  }
};

const getTextForKey = function (text) {
  //
};

onLoad();
