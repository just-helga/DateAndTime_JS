let mode;

const result = document.getElementById('result');

const btnFull = document.getElementById('full');
const btnDate = document.getElementById('date');
const btnTime = document.getElementById('time');

setInterval(update, 1000);
update();

function bindMode(name) {
    return function () {
        mode = name;
        update();
    }
}

btnFull.onclick = bindMode('full');
btnDate.onclick = bindMode('date');
btnTime.onclick = bindMode('time');

function update() {
    result.textContent = format(mode);
}

function format(mode) {
    const now = new Date();
    const fullDate = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

    switch (mode) {
        case 'time': return now.toLocaleTimeString();
        case 'date': return now.toLocaleDateString();
        case 'full': return fullDate;
        default: return fullDate;
    }
}