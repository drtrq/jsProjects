let homeScoreId = document.getElementById("homescore")
let guestScoreId = document.getElementById("guestscore")
let count =0


// Home

function addOneHome (){
    count+=1
    console.log(count)
    homeScoreId.textContent = count
}

function addTwoHome (){
    count+=2
    console.log(count)
    homeScoreId.textContent = count
}

function addThreeHome (){
    count+= 3
    homeScoreId.textContent = count
}
function resetHome (){
    count=0
     homeScoreId.textContent = count
}
// Guest

function addOneGuest (){
    count+=1
    console.log(count)
    guestScoreId.textContent = count
}

function addTwoGuest(){
    count+=2
    console.log(count)
    guestScoreId.textContent = count
}

function addThreeGuest (){
    count+= 3
    guestScoreId.textContent = count
}
function resetGuest (){
    count=0
     guestScoreId.textContent = count
}