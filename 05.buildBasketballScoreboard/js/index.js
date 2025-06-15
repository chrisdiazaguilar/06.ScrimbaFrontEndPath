/**Home ScoreBoard**/

let homeScore = document.getElementById("displayHomescore")
let homeCount = 0

function increment(value){
    homeCount +=value
    homeScore.textContent = homeCount
}


/**Guest ScoreBoard**/
let guestScore = document.getElementById("displayGuestscore")
let guestCount = 0

function incrementGuest(value){
    guestCount +=value
    guestScore.textContent = guestCount 
}

