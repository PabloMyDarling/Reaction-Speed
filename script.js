const randint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let time_ms = 0;
let keep_going = true;
let can_press = false;
const timeLabel = document.getElementById("timeLabel");
const tipLabel = document.getElementById("tipLabel1");

document.addEventListener("keydown", (event) => {
    if (event.code == "Space" && can_press) { keep_going = false; can_press = false; done(); }
});

document.addEventListener("mousedown", (event) => {
    if (event.button === 0 && can_press) { keep_going = false; can_press = false; done(); }
});

const done = () => {
    can_press = false;
    timeLabel.style.color = "#0000ff";
    tipLabel.textContent = "...is your reaction time!";

    const againLabel = document.createElement("label");
    againLabel.classList.add("tipLabel");
    againLabel.textContent = "Reload the page to play again!";
    againLabel.style.top = "75%";

    document.getElementById("contentFrame").appendChild(againLabel);
}

const main = () => {

time_ms += 1
timeLabel.textContent = `${(time_ms / 100).toFixed(2)}s`;
if (time_ms / 100 == 15) { keep_going = false; }
if(keep_going) { setTimeout(main, 10); } else { done(); }

}

setTimeout(() => {timeLabel.style.color = "#00aa00"; can_press = true; tipLabel.textContent = ""; main();}, 1200 + randint(5000, 10000));
