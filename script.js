// CALCULATIONS //

const historyArray = [];
const display = document.getElementById ("display");
input = parseFloat(display.value.toLocaleString('en-US'));  // Line doesn't work as intended - Add commas & remove extra decimals.

function appendToDisplay (input) {
    display.value += input;
    historyArray.push (display.value);  // Adds a series of input/output numbers instead of the calculation histor e.g 73,3+,3+4.
}

function clearDisplay () {    
    display.value = ""
}


function calculate () {

    try{
        display.value = eval(display.value);
        historyArray.push (display.value);  // Adds a series of input/output numbers instead of the calculation histor e.g 73,3+,3+4.
    }

    catch (error) {
        display.value = "Error"
    }
}
 
function deleteNo () {
    display.value = display.value.slice (0,-1);
}

function calulationHistory () {
    appendToDisplay (historyArray);

}

// Clear display once new number is typed and start afresh.
// Display current input & previous output on the screen.