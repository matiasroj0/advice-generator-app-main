const adviceID = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');
const adviceBtn = document.querySelector('.dice-btn');


function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        // Exito
        .then(response => response.json())  // convertir a json
        .then(data => {
            console.log(data.slip)
            adviceID.innerHTML = data.slip.id;
            advice.innerHTML = data.slip.advice;
        })    //imprimir los datos en la consola
}

getAdvice();

adviceBtn.addEventListener('click', ()=>{
    getAdvice();
})

