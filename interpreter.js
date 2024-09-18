import Environment from "./scope/environment.js";
import Variable from "./statement/variable.js";
import { parse } from "./grammar.js";


function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('source');
  element.textContent = contents;
}

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);



function parseInput()
{
    const text = document.getElementById("source").value;
    const result = parse(text);
    const env = new Environment(null);
    console.log(result);
    result.forEach((element) => {
        element.execute(env);
      });

    const symbols = env.getSymbols();
    console.log(symbols);

    let listSymbols = "";
    symbols.forEach (function(value, key) {
    listSymbols += 'nombre: ' + key + ', ' + 'valor: ' + value.value.value + ', tipo: ' + value.type + "\n";
    document.getElementById("simbolos").value = listSymbols;

});

let listPrints = "";
env.prints.forEach(element => {
  listPrints = listPrints + element + "\n";
   
});
document.getElementById("consola").value = listPrints;

}

document.querySelector("#btnCompile").addEventListener("click", parseInput);

