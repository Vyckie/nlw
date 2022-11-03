function createGame(play1,play2,hours){
    return`
        <li>
            <img src="./assets/icon-${play1}.svg" alt="bandeira da ${play1}">
            <strong>${hours}</strong>
            <img src="./assets/icon-${play2}.svg" alt="bandeira de ${play2}">
        </li>   
    `
}

function createCard(date, day, games){
    return `
    <div class="card">
    <h2> ${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>

</div>
    `
}



document.querySelector("#app").innerHTML = `
<header>
<img src="./assets/logo.svg" alt="">
</header>
<main id="cards">
    ${createCard("24/11", "QUINTA", createGame("camaroes","suica","9:00"))}
    ${createCard("28/11", "SEGUNDA", createGame("suica","brasil","11:00"))}
    ${createCard("02/12", "SEXTA", createGame("camaroes","argentina","12:00"))}
</main>`