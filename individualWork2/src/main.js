"use strict";
import UI from "./modules/UI";
import getElem from "./modules/get";
import postElem from "./modules/post";

const url = "http://localhost:5555/todo";


UI.runApp();
getElem(url);
postElem(document.getElementById("todoForm"), url);