/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.getElementById("generator").onclick = function() {
  //write your code here
  console.log("¡Vamos a generar nombres de dominios!");
  document.getElementById("salida").classList.remove("alert-warning");
  document.getElementById("salida").classList.add("alert-success");

  let pronoun = ["El_", "Nuestro_", "Un_"];
  let adj = ["gran_comedor_de_", "famoso_elaborador_de_", "ladrón_de_"];
  let noun = ["morcones", "pacatones", "cocidos"];
  let ext = [".com", ".es", ".net"];
  let resultHTML = "<table>";

  for (let i = 0; i < pronoun.length; i++) {
    for (let y = 0; y < adj.length; y++) {
      for (let x = 0; x < noun.length; x++) {
        for (let z = 0; z < ext.length; z++) {
          if (noun[x].slice(-2) == "es" && ext[z] == ".es") {
            noun[x] = noun[x].slice(0, -2);
          }
          let dominio = pronoun[i] + adj[y] + noun[x] + ext[z];
          resultHTML += `<tr><td>${dominio}</td></tr>`;
          noun = ["morcones", "pacatones", "cocidos"];

          /*Para nombre aleatorio WIP
          document.getElementById("generator").onclick = function() {
            let pronoun_random =
              pronoun[Math.floor(Math.random() * pronoun.length)];
            let adj_random = adj[Math.floor(Math.random() * adj.length)];
            let noun_random = noun[Math.floor(Math.random() * noun.length)];
            let ext_random = ext[Math.floor(Math.random() * ext.length)];

            let nuevoPronoun = pronoun_random + " ";
            let nuevoAdj = adj_random + " ";
            let nuevoNoun = noun_random + " ";
            let nuevoExt = ext_random;
            let resultado = document.querySelector("#result");
            document.getElementById("salida").classList.remove("invisible");
            document.getElementById("salida").classList.add("visible");
            resultado.innerHTML =
              nuevoPronoun + nuevoAdj + nuevoNoun + nuevoExt;
          };*/
        }
      }
    }
  }
  resultHTML += "</table>";
  document.getElementById("salida").innerHTML = resultHTML;
};
