let hs=document.getElementById("h")
let gs=document.getElementById("g")
let countH= 0
let countG =0 


function addPoints(team,points) {
   
    if (team === "H" ) {

         countH+=points
         hs.textContent= countH
        console.log (countG,countH) }
    
  else if (team==="G") {
        countG+=points 
        gs.textContent=countG
        
    }

    }
     

    




function reset(params) {
    countH = 0
    countG = 0
    gs.textContent=hs.textContent=0

console.log(countG, countH)
}

// THIS  BElow is noobs way of doing it




// function plus1(params) {
//     countH +=1
//     hs.innerText=countH
//     console.log(countH)
// }
// function plus2(params) {
//     countH +=2
//     hs.innerText=countH
//     console.log(countH)
// }
// function plus3(params) {
//     countH +=3
//     hs.innerText=countH
//     console.log(countH)
// }

// function plus1g(params) {
//     countG +=1
//     gs.innerText=countG
//     console.log(countG )
// }
// function plus2g(params) {
//     countG +=2
//     gs.innerText=countG
//     console.log(countG)
// }
// function plus3g(params) {
//     countG +=3
//     gs.innerText=countG
//     console.log(countG)
// }

