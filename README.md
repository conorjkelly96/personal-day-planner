# Personal Day Planner

## About the project

## Technologies Used

- HTML5
- CSS3
  - Bootstrap
  - fontawesome
- JavaScript
  - jQuery
  - moment.js

## Link to GitHub Pages

[Click here!](https://conorjkelly96.github.io/personal-day-planner/)

## Solution Overview

### On Load Webpage Rendering

To render the DOM elements dynamically, an array of objects including two `keys` were used: a `key` for rendering the `hour`, and a key to pair this with a value in `localStorage`. See an extract of the code below:

```javascript
const workingHours = [
  {
    hour: "09:00",
    localStorageKey: "9",
  },
```

Combined with the `onLoad()` function, this ensured that the following functions were called when the user initially loaded the webpage:

```javascript
const onLoad = function () {
  // on record load, check local storage
  initializeLocalStorage();

  //Render Clock
  renderClock();

  //Render Hour Block
  constructHourBlocks();

  // render diary events
  renderEventDiary();
};

window.addEventListener("load", onLoad);
```

### Rendering DOM Elements Dynamically

The main user interaction was dependant upon the construction of the DOM element. A for loop was used to render an hour block for each object in the `workingHours` array:

```javascript
// Construct Hour Blocks in workingHours Array
const constructHourBlocks = function () {
  for (let i = 0; i < workingHours.length; i++) {
    const data = workingHours[i];
    const userInput = $("<textarea/>");
    const timeLabel = $("<label>", {
      name: "time-label",
      id: "time-label",
      class: "time-of-day",
    });
    timeLabel.text(data.hour);
```

### Storing and Retrieving Data in `localStorage`:

When first opening the application, or starting a new session, the `initializeLocalStorage()` function is called on window load to check if there is a value in local storage, and if not, to store an empty object. We will see how this object is used later on in the solution design:

```javascript
const initializeLocalStorage = function () {
  const dataFromLS = localStorage.getItem("activitiesByHour");
  if (!dataFromLS) {
    localStorage.setItem("activitiesByHour", JSON.stringify({}));
  }
};
```

After the blocks were rendered and constructed using `jQuery`, it was important to store the user input in `localStorage` with the purpose of allowing the user to come back to the webpage and revisit their working day schedule without having to re-enter the data. This was achieved using the `saveData();` function:

```javascript
const saveData = function (event) {
    if ($(event.target).is("button")) {
      const timeOfEvent = $(event.target).attr("id");
      const userInput = $(event.target).prev().val();
      const dataFromLocalStorage = JSON.parse(
        localStorage.getItem("activitiesByHour")
      );
      dataFromLocalStorage[timeOfEvent] = userInput;
      localStorage.setItem(
        "activitiesByHour",
        JSON.stringify(dataFromLocalStorage)
      );
```

Once the data is stored locally, it can be rendered on the webpage so the user can check on their daily activities:

```javascript
const renderEventDiary = function () {
  const dataFromLocalStorage = JSON.parse(
    localStorage.getItem("activitiesByHour")
  );

  const renderText = function (index) {
    const hour = $(this).next().attr("id");
    if (dataFromLocalStorage.hasOwnProperty(hour)) {
      $(this).text(dataFromLocalStorage[hour]);
    }
  };

  $("textarea").each(renderText);
};
```

### Additions to the MVP

The initial solution design involved allowing a user to enter events by the hour using local storage to store persistent data.

I have since added to the MVP (minimum viable product) by adding two new features

**Dynamic Clock using Moment.JS**

Using the `renderClock()` function, I have used moment.js to render a dynamic clock displaying Days, Months, Years, Hours, Minutes and Seconds at the top of the webpage to display the current time to the user. The solution combines the use of JS timer functionality and moment.js:

```javascript
const renderClock = function () {
  function update() {
    $("#clock").html(moment().format("DD MMMM YYYY H:mm:ss"));
  }
  setInterval(update, 1000);
};
```

**Clear localStorage**

A button was added in the `<header>` section of the webpage to allow the user to clear local storage without closing the browser session or clearing using the DevTools. This was achieved using the `clearLS()` function triggering two actions: clearing local storage and reloading the webpage:

```javascript
const clearLS = function (event) {
  localStorage.clear();
  window.location.reload();
};

$("#clear-ls").click(clearLS);
```
