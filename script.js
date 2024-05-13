let money = 0;
let autoClicks = 0;
let clickMultiplier = 1;
let autoClickMultiplier = 1;
let clickSpeed = 1000;

let clickMultiplierCost = 10;
let autoClickMultiplierCost = 20;
let clickSpeedCost = 10;

function updateStats() {
    document.getElementById('money').innerText = money;
    document.getElementById('autoClicks').innerText = autoClicks;
    document.getElementById('clickMultiplierBtn').innerText = `Multiplicar Cliques (+1) - $${clickMultiplierCost}`;
    document.getElementById('autoClickMultiplierBtn').innerText = `Multiplicar Cliques Automáticos (+1) - $${autoClickMultiplierCost}`;
    document.getElementById('clickSpeedBtn').innerText = `Cliques Mais Rápidos (+1) - $${clickSpeedCost}`;
}

function clickMoney() {
    money += clickMultiplier;
    updateStats();
}

function buyUpgrade(upgradeType, cost) {
    switch (upgradeType) {
        case 'clickMultiplier':
            if (money >= clickMultiplierCost) {
                money -= clickMultiplierCost;
                clickMultiplier += 1;
                clickMultiplierCost += 10;
                document.getElementById('clickMultiplierCost').innerText = clickMultiplierCost;
                updateStats();
            }
            break;
        case 'autoClickMultiplier':
            if (money >= autoClickMultiplierCost) {
                money -= autoClickMultiplierCost;
                autoClickMultiplier += 1;
                autoClickMultiplierCost += 10;
                document.getElementById('autoClickMultiplierCost').innerText = autoClickMultiplierCost;
                autoClick();
                updateStats();
            }
            break;
        case 'clickSpeed':
            if (money >= clickSpeedCost && clickSpeed > 100) {
                money -= clickSpeedCost;
                clickSpeed -= 100;
                clickSpeedCost += 10;
                document.getElementById('clickSpeedCost').innerText = clickSpeedCost;
                updateStats();
            }
            break;
    }
}

function autoClick() {
    setInterval(function() {
        money += autoClickMultiplier;
        updateStats();
    }, clickSpeed);
}

// Inicialização
updateStats();
autoClick();