const url ="https://persongalleri-5d3e.restdb.io/rest/persongalleri";

const options = {
  headers: {
    'x-apikey': "600fe9211346a1524ff12e31"
  }
};

//hent dataen (delayed) async func
async function hentData() {
  const response = await fetch(url, options);
  const json = await response.json();
  vis(json);
}

//loop gennem json data 
const main = document.querySelector("main");
const template = document.querySelector("template").content; //templatens indhold

function vis(json){
  console.log(json);
  json.forEach(person => { //person element som der bliver loopet igennem
    const clone = template.cloneNode(true); //todo: download billedeerne! 
    clone.querySelector(".billede").src = "faces/" + person.billede; //ændre billede src til mediesrc (destination url) og tilføj tilhørende billede
    clone.querySelector(".navn").textContent =  person.fornavn; //ændre Nodens textindhold til person.navn
    clone.querySelector(".titel").textContent = person.titel;
    clone.querySelector(".fødselsdag").textContent = person.fødselsdag;
    clone.querySelector(".contact").textContent = person.email;
    main.appendChild(clone); //tilføj til main
  })
}
hentData();