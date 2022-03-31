
function guess(chooseNumber) {
    const numberRandom = (Math.random() * 10).toFixed(0)
    let achieved = false;


    for (let i = 0; i < 3; i++) {

        chooseNumber = prompt('Tente adivinhar o número de 0 a 10');
        if (chooseNumber == numberRandom) {
            alert(`Parabéns você acertou! o número pensado era ${numberRandom}`);
            achieved = true
            break
        }
        alert("Ops... Errado");

    }
    if (!achieved) {
        alert(`As Chances acabaram o número correto era ${numberRandom}`);
    }
}

guess()