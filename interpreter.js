import { parse } from "./grammar.js";

function parseInput()
{
    const text = document.getElementById("source").value;
    const result = parse(text);
    console.log(result);
}

document.querySelector("#btnCompile").addEventListener("click", parseInput);

