// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin; //saves input to the variable stdin. this line enables the computer to understand that a keypress input is expected to be stored to the variable stdin.
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //.on explanation - event listener: "data" (type of event)| depending on the type of event, it may or may not transmit the data to the callback function that follows), handleUserInput (callback function - the action that runs when data is received in this case).
  return stdin;
};

//specifies what happens when ~case-specific~'data' is received from stdin
const handleUserInput = function (key) {
  // your code here
  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };
