function createGame(play1,play2,hours){
    return`
        <li>
            <img src="./assets/icon-${play1}.svg" alt="bandeira da ${play1}">
            <strong>${hours}</strong>
            <img src="./assets/icon-${play2}.svg" alt="bandeira de ${play2}">
        </li>   
    `
}

let delay =0;
function createCard(date, day, games){
    delay = delay + 0.1;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2> ${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>

</div>
    `
}



document.querySelector("#cards").innerHTML = `
    ${createCard("24/11", "QUINTA", createGame("camaroes","suica","9:00")+ createGame("japao","colombia","15:00"))} 
    ${createCard("28/11", "SEGUNDA", createGame("suica","brasil","11:00") + createGame("brasil","argentina","22:00"))} 
    ${createCard("02/12", "SEXTA", createGame("camaroes","argentina","12:00") + createGame("japao","hungary","17:00"))}
`