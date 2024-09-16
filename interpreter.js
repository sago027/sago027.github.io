import Environment from "./scope/environment.js";
import Variable from "./statement/variable.js";
import { parse } from "./grammar.js";


function parseInput()
{
    const text = document.getElementById("source").value;
    const result = parse(text);
    const env = new Environment(null);

    console.log(result);
}

document.querySelector("#btnCompile").addEventListener("click", parseInput);

