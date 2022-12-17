"use strict";

const root = document.querySelector("#root");

const screenBlock = document.createElement("div");
const screenBtnEdit = document.createElement("button");

screenBtnEdit.textContent = "EDIT";
screenBlock.id = "screenBlock";
root.prepend(screenBlock);
screenBlock.append(screenBtnEdit);

// root.addEventListener("submit", function (e) {
//     e.preventDefault();
// });