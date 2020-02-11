// Add DOM selectors to target input and UL movie list
var inp = document.querySelector("input");
var myMovieList = document.querySelector("ul");

// Example of a simple function that clears the input after a user types something in
function clearInput() {
    inp.value = "";
}

function clearMovies() {
    // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
    myMovieList.innerHTML = '';
}

// This function is executed when the user clicks [ADD MOVIE] button.
function addMovie() {
    // Step 1: Get value of input
    var userTypedText = inp.value;
    // Step 2: Create an empty <li></li>
    var li = document.createElement("li"); // <li></li>

    // Step 3: Prepare the text we will insert INTO that li ^...example: Harry Potter
    var textToInsert = document.createTextNode(userTypedText);

    // Step 4: Insert text into li
    // <li>Harry Potter </li>
    li.appendChild(textToInsert);

    // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
    myMovieList.appendChild(li);
}

var DivPlace = document.getElementById("movieHistoryCard");
var HistoryTable = document.createElement("TABLE");

DivPlace.appendChild(HistoryTable);

function addHistoryMovie(){
    var tracker = true;
    if(HistoryTable.rows.length == 0){
    var NewRow = HistoryTable.insertRow(0);
    var NewCell = NewRow.insertCell(0);
    var SecondCell = NewRow.insertCell(1);

    NewCell.innerHTML = inp.value;
    SecondCell.innerHTML = 1;
    }
    else{
        for(i = 0; i < HistoryTable.rows.length ; i++){
            if(HistoryTable.rows[i].cells[0].innerHTML == inp.value){
            HistoryTable.rows[i].cells[1].innerHTML = parseInt(HistoryTable.rows[i].cells[1].innerHTML) + 1;
           }
    }}

    for(i = 0; i < HistoryTable.rows.length ; i++){
        if(HistoryTable.rows[i].cells[0].innerHTML == inp.value){
                tracker = false;
        }}

    
    if(tracker){
        var NewRow = HistoryTable.insertRow(0);
        var NewCell = NewRow.insertCell(0);
        var SecondCell = NewRow.insertCell(1);
    
        NewCell.innerHTML = inp.value;
        SecondCell.innerHTML = 1

    }
}
