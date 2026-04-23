"use strict";
export let timeModel = {
    currentTime: new Date(),
    getCurrentTime: () => {
        timeModel.currentTime = new Date();
        return timeModel.currentTime.toLocaleTimeString();
    }
}
