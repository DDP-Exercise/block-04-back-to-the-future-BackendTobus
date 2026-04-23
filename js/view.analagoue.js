"use strict";
export let analogueView = {
    currentDoc : HTMLLabelElement,
    init: function (time) {
        const style = document.createElement('style');
        style.textContent = `
    .clock {
        width: 300px;
        height: 300px;
        border: 10px solid black;
        border-radius: 50%;
        position: relative;
        margin: 50px auto;
        background: white;
    }
    .hand {
        width: 50%;
        height: 6px;
        background: black;
        position: absolute;
        top: 50%;
        transform-origin: 100%;
        transform: rotate(90deg);
        transition: all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1);
        border-radius: 4px;
    }
    .hour-hand { width: 35%; left: 15%; }
    .min-hand { width: 45%; left: 5%; }
    .second-hand { background: red; height: 2px; }
`;
        document.head.appendChild(style);


        const clock = document.createElement('div');
        clock.className = 'clock';

        const hHand = document.createElement('div');
        hHand.className = 'hand hour-hand';

        const mHand = document.createElement('div');
        mHand.className = 'hand min-hand';

        const sHand = document.createElement('div');
        sHand.className = 'hand second-hand';

        clock.appendChild(hHand);
        clock.appendChild(mHand);
        clock.appendChild(sHand);
        document.body.appendChild(clock);
        setDate(time);


    },
    update: function (time) {
        setDate(time);
    }
}
function setDate(time) {

    let now = time.split(":");

    const seconds = now[2]
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    document.getElementsByClassName('hand second-hand')[0].style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now[1]
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    document.getElementsByClassName('hand min-hand')[0].style.transform= `rotate(${minsDegrees}deg)`;

    const hour = now[0]
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    document.getElementsByClassName('hand hour-hand')[0].style.transform = `rotate(${hourDegrees}deg)`;
}