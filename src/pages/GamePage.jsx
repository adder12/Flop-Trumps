import React from "react";
import ReactDOM from "react";

function GamePage() {
  return (
    <>
      <div>
        <h2>Lets play a game</h2>
        <div id="gameDiv">
          <div id="ownCardDiv">     <OwnCardStructure />
          <ApiCall id="23" /></div>
          <div id="oppCardDiv"></div>

     
        </div>
      </div>
    </>
  );
}
export default GamePage;

function ApiCall(props) {
  let filmId = document.getElementById("filmId");
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let rating = document.getElementById("rating");
  let intRating = document.getElementById("intRating");
  let release = document.getElementById("release");
  let length = document.getElementById("length");
  let rate = document.getElementById("rate");
  let cost = document.getElementById("cost");

  let id = props.id;
  fetch(`http://localhost:8080/home/singleFilm/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      filmId.innerHTML = `${data.filmId}`;
      title.innerHTML = ` ${data.title}`;
      description.innerHTML = `${data.description}`;
      rating.innerHTML = `${data.rating}`;
      intRating.innerHTML = `${data.intRating}`;
      release.innrtHTML = `${data.releaseYear}`;
      length.innerHTML = `${data.length}`;
      rate.innerHTML = `${data.rentalRate}`;
      cost.innerHTML = `${data.replacementCost}`;
    });
}
function OwnCardStructure() {
  return (
    <>
      <h6 id="filmId"></h6>
      <h3 id="title"></h3>
      <h4 id="description"></h4>
      <h4 id="rating"></h4>
      <h4 id="intRating"></h4>
      <h4 id="release"></h4>
      <h4 id="length"></h4>
      <h4 id="rate"></h4>
      <h4 id="cost"></h4>
    </>
  );
}

function OppCardStructure() {
    return (
      <>
        <h6 id="oppfilmId"></h6>
        <h3 id="opptitle"></h3>
        <h4 id="oppdescription"></h4>
        <h4 id="opprating"></h4>
        <h4 id="oppintRating"></h4>
        <h4 id="opprelease"></h4>
        <h4 id="opplength"></h4>
        <h4 id="opprate"></h4>
        <h4 id="oppcost"></h4>
      </>
    );
  }

  function OppApiCall(props) {
    let filmId = document.getElementById("oppfilmId");
    let title = document.getElementById("opptitle");
    let description = document.getElementById("oppdescription");
    let rating = document.getElementById("opprating");
    let intRating = document.getElementById("oppintRating");
    let release = document.getElementById("opprelease");
    let length = document.getElementById("opplength");
    let rate = document.getElementById("opprate");
    let cost = document.getElementById("oppcost");
  
    let id = props.id;
    fetch(`http://localhost:8080/home/singleFilm/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        filmId.innerHTML = `${data.filmId}`;
        title.innerHTML = ` ${data.title}`;
        description.innerHTML = `${data.description}`;
        rating.innerHTML = `${data.rating}`;
        intRating.innerHTML = `${data.intRating}`;
        release.innrtHTML = `${data.releaseYear}`;
        length.innerHTML = `${data.length}`;
        rate.innerHTML = `${data.rentalRate}`;
        cost.innerHTML = `${data.replacementCost}`;
      });
  }

  function generateOwnCard(){
    
    
    let maxNumber = fetch(`http://localhost:8080/home/filmCount`).then((res) => res.text())
    console.log("Maxnumber is: " + maxNumber)

let randomId = Math.floor((Math.ranadom() * maxNumber)+1)

<ApiCall id=randomId/>


}