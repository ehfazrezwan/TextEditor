/**
 ̶*̶ ̶T̶O̶D̶O̶:̶ ̶U̶p̶d̶a̶t̶e̶ ̶t̶h̶e̶ ̶t̶e̶x̶t̶ ̶i̶n̶ ̶t̶h̶e̶ ̶"̶F̶o̶r̶m̶a̶t̶t̶e̶d̶ ̶T̶e̶x̶t̶"̶ ̶s̶e̶c̶t̶i̶o̶n̶ ̶a̶s̶ ̶a̶ ̶u̶s̶e̶r̶ ̶t̶y̶p̶e̶s̶ ̶i̶n̶ ̶t̶h̶e̶ ̶t̶e̶x̶t̶a̶r̶e̶a̶
 ̶*̶ ̶T̶O̶D̶O̶ ̶T̶O̶G̶E̶T̶H̶E̶R̶:̶ ̶A̶d̶d̶ ̶a̶ ̶.̶b̶o̶l̶d̶,̶ ̶.̶i̶t̶a̶l̶i̶c̶ ̶c̶l̶a̶s̶s̶e̶s̶ ̶t̶o̶ ̶"̶F̶o̶r̶m̶a̶t̶t̶e̶d̶ ̶T̶e̶x̶t̶"̶ ̶w̶h̶e̶n̶ ̶t̶h̶e̶ ̶a̶p̶p̶r̶o̶p̶r̶i̶a̶t̶e̶ ̶b̶u̶t̶t̶o̶n̶ ̶i̶s̶ ̶c̶l̶i̶c̶k̶e̶d̶
̶ ̶*̶ ̶T̶O̶D̶O̶:̶ ̶A̶d̶d̶ ̶a̶n̶ ̶.̶u̶n̶d̶e̶r̶l̶i̶n̶e̶ ̶c̶l̶a̶s̶s̶ ̶t̶o̶ ̶"̶F̶o̶r̶m̶a̶t̶t̶e̶d̶ ̶T̶e̶x̶t̶"̶ ̶w̶h̶e̶n̶ ̶U̶n̶d̶e̶r̶l̶i̶n̶e̶ ̶b̶u̶t̶t̶o̶n̶ ̶i̶s̶ ̶c̶l̶i̶c̶k̶e̶d̶
 ̶*̶ ̶T̶O̶D̶O̶:̶ ̶T̶o̶g̶g̶l̶e̶ ̶t̶h̶e̶ ̶a̶l̶i̶g̶n̶ ̶s̶t̶y̶l̶e̶ ̶f̶o̶r̶ ̶"̶F̶o̶r̶m̶a̶t̶t̶e̶d̶ ̶T̶e̶x̶t̶"̶ ̶w̶h̶e̶n̶ ̶t̶h̶e̶ ̶a̶p̶p̶r̶o̶p̶r̶i̶a̶t̶e̶ ̶b̶u̶t̶t̶o̶n̶ ̶i̶s̶ ̶c̶l̶i̶c̶k̶e̶d̶
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
const updateText = () =>
  (document.getElementById("text-output").innerText = document.getElementById(
    "text-input"
  ).value);

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
const makeBold = (elem) => {
  //CODE GOES HERE
  let outputBox = document.getElementById("text-output");
  elem.classList.toggle("active");
  outputBox.classList.toggle("bold");
};

/**
 * Toggle the italic class for the output text
 */
const makeItalic = (elem) => {
  let outputBox = document.getElementById("text-output");
  elem.classList.toggle("active");
  outputBox.classList.toggle("italic");
};

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
const makeUnderline = (elem) => {
  //CODE GOES HERE
  let outputBox = document.getElementById("text-output");
  elem.classList.toggle("active");
  outputBox.classList.toggle("underline");
};

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
const alignText = (elem, alignType) => {
  // CODE GOES HERE
  let outputBox = document.getElementById("text-output");
  outputBox.style.textAlign = alignType;

  let alignList = document.getElementsByClassName("align");

  for (button of alignList) {
    if (button === elem) {
      elem.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }
};
