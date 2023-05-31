
async function fetchPlanets() { 
  let results = await fetch("https://swapi.dev/api/planets/1/");
  const data = await results.json();
    console.log(data);
 
    document.getElementById("name").innerHTML=data.name;
    document.getElementById("rot").innerHTML=data.rotation_period;
    document.getElementById("orb").innerHTML=data.orbital_period;
    document.getElementById("diameter").innerHTML=data.diameter;
    document.getElementById("climate").innerHTML=data.climate;
    document.getElementById("gravity").innerHTML=data.gravity;
    document.getElementById("terrain").innerHTML=data.terrain;
    document.getElementById("surface_water").innerHTML=data.surface_water;
    document.getElementById("population").innerHTML=data.population;
    document.getElementById("created").innerHTML=data.created;
    document.getElementById("edited").innerHTML=data.edited;
    document.getElementById("url").innerHTML=data.url;
    document.getElementById("link1").innerHTML=data.residents[0];
    document.getElementById("link2").innerHTML=data.residents[1];
    document.getElementById("link3").innerHTML=data.residents[2];
    document.getElementById("link4").innerHTML=data.residents[3];
    document.getElementById("link5").innerHTML=data.residents[4];
    document.getElementById("link6").innerHTML=data.residents[5];
    document.getElementById("link7").innerHTML=data.residents[6];
    document.getElementById("link8").innerHTML=data.residents[7];
    document.getElementById("link9").innerHTML=data.residents[8];
    document.getElementById("link10").innerHTML=data.residents[9];

    document.getElementById("linkA").innerHTML=data.films[0];
    document.getElementById("linkA").innerHTML=data.films[0];
    document.getElementById("linkB").innerHTML=data.films[1];
    document.getElementById("linkC").innerHTML=data.films[2];
    document.getElementById("linkD").innerHTML=data.films[3];
    document.getElementById("linkE").innerHTML=data.films[4];



} 
fetchPlanets();
