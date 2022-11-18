import { React, useState } from "react";


function GamePage() {
  const [points, setPoints] = useState(0);
  return (
    <>
      <div class="SiteDiv">
        <div id="headerDiv">
          <h2>Lets play a game</h2>
          <h3>Points: {points}</h3>
        </div>
        <div id="gameDiv">
          <div id="ownCardDiv">
            <OwnCardStructure />
            <GenerateOwnCard />
          </div>
          <div id="oppCardDiv">
            <OppCardStructure />
            <GenerateOppCard />
          </div>
        </div>
        <GameButtons setPoints={setPoints} />
      </div>
    </>
  );
}



function GenerateOwnCard() {
  let maxNumber = 0;
  fetch(
    `https://fake-films-top-trumps-1668596784853.azurewebsites.net/home/filmCount`
  )
    .then((res) => res.text())
    .then((data) => {
      maxNumber = data;
      let randomId = Math.random();
      randomId = randomId * maxNumber;
      randomId++;
      randomId = Math.floor(randomId);
      console.log(randomId);

      let filmId = document.getElementById("filmId");
      let title = document.getElementById("title");
      let description = document.getElementById("description");
      let rating = document.getElementById("rating");
      let intRating = document.getElementById("intRating");
      let release = document.getElementById("release");
      let length = document.getElementById("length");
      let rate = document.getElementById("rate");
      let cost = document.getElementById("cost");

      let id = randomId;

      fetch(
        `https://fake-films-top-trumps-1668596784853.azurewebsites.net/home/singleFilm/${id}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          filmId.innerHTML = `${data.filmId}`;
          title.innerHTML = ` ${data.title}`;
          description.innerHTML = `${data.description}`;
          rating.innerHTML = `${data.rating}`;
          intRating.innerHTML = `${data.intRating}`;
          release.innerHTML = `${data.releaseYear}`;
          length.innerHTML = `${data.length}`;
          rate.innerHTML = `${data.rentalRate}`;
          cost.innerHTML = `${data.replacementCost}`;
        });
    });
}

function OwnCardStructure() {
  return (
    <>
      <div id="image" />
      <h6 id="filmId">*</h6>
      <h4 id="intRating" class="disabled">
        *
      </h4>
      <table>
        <tr>
          <td>Title: </td>
          <td>
            <h3 id="title">*</h3>
          </td>
        </tr>
        <tr>
          <td>Description: </td>
          <td>
            <h4 id="description">*</h4>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>Rating: </td>
          <td>
            <h4 id="rating">*</h4>
          </td>
        </tr>
        <tr>
          <td>Release Year: </td>
          <td>
            <h4 id="release">*</h4>
          </td>
        </tr>
        <tr>
          <td>Length: </td>
          <td>
            <h4 id="length">*</h4>
          </td>
        </tr>
        <tr>
          <td>Rental Rate: </td>
          <td>
            <h4 id="rate">*</h4>
          </td>
        </tr>
        <tr>
          <td>Replacement Cost: </td>
          <td>
            <h4 id="cost">*</h4>
          </td>
        </tr>
      </table>
    </>
  );
}

function GameButtons({ setPoints }) {
  const handleClick = (type) => {
    console.log("test");
    let intRating = document.getElementById("intRating");
    let release = document.getElementById("release");
    let length = document.getElementById("length");
    let rate = document.getElementById("rate");
    let cost = document.getElementById("cost");
    let oppIntRating = document.getElementById("oppintRating");
    let oppRelease = document.getElementById("opprelease");
    let oppLength = document.getElementById("opplength");
    let oppRate = document.getElementById("opprate");
    let oppCost = document.getElementById("oppcost");
    let result = 1;
    switch (type) {
      case "r":
        result = Comparison(intRating.innerHTML, oppIntRating.innerHTML);

        break;
      case "ry":
        result = Comparison(release.innerHTML, oppRelease.innerHTML);
        break;
      case "l":
        result = Comparison(length.innerHTML, oppLength.innerHTML);
        break;
      case "rr":
        result = Comparison(rate.innerHTML, oppRate.innerHTML);
        break;
      case "rc":
        result = Comparison(cost.innerHTML, oppCost.innerHTML);
        break;
    }

    console.log(result);

    if (result === 0) {
      console.log("where");
      GenerateOwnCard();
      return;
    } else if (result === 1) {
      console.log("there");
      GenerateOppCard();
      return;
    } else {
      console.log("here");
      setPoints(+1);

      ReplaceOwnCard();
      GenerateOppCard();
      console.log("hello");

      return;
    }
  };
  return (
    <div id="buttonDiv">
      <button class="gameButtons" onClick={() => handleClick("r")}>
        Rating
      </button>
      <button class="gameButtons" onClick={() => handleClick("ry")}>
        Release Year
      </button>
      <button class="gameButtons" onClick={() => handleClick("l")}>
        Length
      </button>
      <button class="gameButtons" onClick={() => handleClick("rr")}>
        Rental Rate
      </button>
      <button class="gameButtons" onClick={() => handleClick("rc")}>
        Replacement cost
      </button>
    </div>
  );
}

function OppCardStructure() {
  return (
    <>
      <div id="image" />
      <h6 id="oppfilmId">*</h6>
      <h4 id="oppintRating" class="disabled">
        *
      </h4>
      <table>
        <tr>
          <td>Title: </td>
          <td>
            <h3 id="opptitle">*</h3>
          </td>
        </tr>
        <tr>
          <td>Description: </td>
          <td>
            <h4 id="oppdescription">*</h4>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>Rating: </td>
          <td>
            <h4 id="opprating" class="disabled">
              *
            </h4>
          </td>
          <td class="Enabled">?????</td>
        </tr>
        <tr>
          <td>Release Year: </td>
          <td>
            <h4 id="opprelease" class="disabled">
              *
            </h4>
          </td>
          <td class="Enabled">?????</td>
        </tr>
        <tr>
          <td>Length: </td>
          <td>
            {" "}
            <h4 id="opplength" class="disabled">
              *
            </h4>
          </td>
          <td class="Enabled">?????</td>
        </tr>
        <tr>
          <td>Rental Rate: </td>
          <td>
            <h4 id="opprate" class="disabled">
              *
            </h4>
          </td>
          <td class="Enabled">?????</td>
        </tr>
        <tr>
          <td>Replacement Cost: </td>
          <td>
            {" "}
            <h4 id="oppcost" class="disabled">
              *
            </h4>
          </td>
          <td class="Enabled">?????</td>
        </tr>
      </table>
    </>
  );
}

function GenerateOppCard() {  //function to randomly generate an opponents card
  let maxNumber = 0;
  fetch(
    `https://fake-films-top-trumps-1668596784853.azurewebsites.net/home/filmCount`
  )
    .then((res) => res.text())
    .then((data) => {
      maxNumber = data;
      let randomId = Math.floor((Math.random()* maxNumber)+1);
     
      randomId = Math.floor(randomId);
      console.log(randomId);

      let filmId = document.getElementById("oppfilmId");
      let title = document.getElementById("opptitle");
      let description = document.getElementById("oppdescription");
      let rating = document.getElementById("opprating");
      let intRating = document.getElementById("oppintRating");
      let release = document.getElementById("opprelease");
      let length = document.getElementById("opplength");
      let rate = document.getElementById("opprate");
      let cost = document.getElementById("oppcost");
      let id = randomId;

      fetch(
        `https://fake-films-top-trumps-1668596784853.azurewebsites.net/home/singleFilm/${id}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          filmId.innerHTML = `${data.filmId}`;
          title.innerHTML = ` ${data.title}`;
          description.innerHTML = `${data.description}`;
          rating.innerHTML = `${data.rating}`;
          intRating.innerHTML = `${data.intRating}`;
          release.innerHTML = `${data.releaseYear}`;
          length.innerHTML = `${data.length}`;
          rate.innerHTML = `${data.rentalRate}`;
          cost.innerHTML = `${data.replacementCost}`;
        });
    });
}

function Comparison(val1, val2) { //Function to perform card comparison
  console.log("val1" + val1);
  console.log("val2" + val2);
  if (val1 < val2) {
    return 0;
  } else if (val1 == val2) {
    return 1;
  } else {
    return 2;
  }
}

function ReplaceOwnCard() { //function to replace the users card with the opponents card
  let filmId = document.getElementById("filmId");
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let rating = document.getElementById("rating");
  let intRating = document.getElementById("intRating");
  let release = document.getElementById("release");
  let length = document.getElementById("length");
  let rate = document.getElementById("rate");
  let cost = document.getElementById("cost");
  let oppFilmId = document.getElementById("oppfilmId");
  let oppTitle = document.getElementById("opptitle");
  let oppDescription = document.getElementById("oppdescription");
  let oppRating = document.getElementById("opprating");
  let oppIntRating = document.getElementById("oppintRating");
  let oppRelease = document.getElementById("opprelease");
  let oppLength = document.getElementById("opplength");
  let oppRate = document.getElementById("opprate");
  let oppCost = document.getElementById("oppcost");

  filmId.innerHTML = oppFilmId.innerHTML;
  title.innerHTML = oppTitle.innerHTML;
  description.innerHTML = oppDescription.innerHTML;
  rating.innerHTML = oppRating.innerHTML;
  intRating.innerHTML = oppIntRating.innerHTML;
  release.innerHTML = oppRelease.innerHTML;
  length.innerHTML = oppLength.innerHTML;
  rate.innerHTML = oppRate.innerHTML;
  cost.innerHTML = oppCost.innerHTML;
}

export default GamePage;