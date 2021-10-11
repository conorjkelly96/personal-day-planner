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
  // function to check if anything is in local storage
  // if so, return data
  // if not, set default value
  // save data function
};

const renderClock = function () {
  // function to render current day and time
};

const renderHourBlocks = function () {
  // render hour blocks
};

const isPresent = function () {
  // if present - set color to --mango
  //  if false - set color to --orange-pantone
};
