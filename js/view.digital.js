"use strict";

export let digitalView = {
    currentDoc : HTMLLabelElement,
    init: function (time) {
        this.currentDoc = document.createElement("label");
        this.currentDoc.textContent = time;
        document.body.append(this.currentDoc);
        this.addButton();
    },
    update: function (time) {
        this.currentDoc.textContent = time;
    },
    addButton: function() {
        let btn = document.createElement("button")
        btn.textContent = "Save Timestamp";
        document.body.append(btn);
        btn.addEventListener("click",{})
    },
}
