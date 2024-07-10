//Libraries
import $ from "jquery";

//CSS in JS
//import style from "../scss/test.scss";

import Test from "./test.es6";
const test = new Test();

const heyarr = ["hey", "hey", "hey"];
const hey2 = heyarr.map((el) => el === "rewrite");

async function HEY() {
    console.log("hey");
    await console.log("hey async");
}

HEY();
