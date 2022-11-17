import React from "react";
import ReactDOM from "react-dom";

function HowTo() {
  return (
    <>
      <div class="SiteDiv">
        <div id="infoDiv">
            <TopTrumpIntro/>
            <TopTrumpInfo/>
          <CardImage />
         
<TopTrumpGameLoopInfo/>
       

          <tr></tr>
<FlopTrumpInfo/>

        </div>
      </div>
    </>
  );
}
export default HowTo;

function CardImage  ()  {
  return <img src="Dreamliner.png" />;
};

function TopTrumpIntro () {
  return (
    <>
      <h2>So, you don't know how to play flop trumps?</h2>
      <h3>
        Well its pretty much just Top Trumps<sup>©</sup> so if you know that,
        then you are set
      </h3>
      <h4>
        oh, you dont know how to play Top Trumps<sup>©</sup>, well let me tell
        you
      </h4>
    </>
  );
};
function TopTrumpInfo  ()  {
  return (
    <>
      
      <h4>
        Top Trumps is a card game played with a deck of cards, based around a
        given subject
        <br />
        be it, trains, dog breeds, or very obscure subjects.
      </h4>
      <br />
      <h4>
        Each card in the deck represents a single item in the subject group and
        has seperate numerical stats assigned to
        <br />
        various properties of that item
      </h4>
    </>
  );
};

function TopTrumpGameLoopInfo(){
return(
    <>   <h4>
    In standard top trumps all players split the deck between
    themselves. <br /> the core gameplay loop is that on a players turn
    they take a card from their deck, choose one of their categories
    that they think their card
    <br />
    has the highest stat in. All the stats are revealed and the person
    with the highest, takes all the cards. Gameplay then repeats. If a
    player runs out of cards, they are out of the game.{" "}
  </h4>
  <h4>
    The winner is declared when one person ends up with the whole deck,
    although this gets considerably harder when only two people remain
  </h4></>
)
}

function FlopTrumpInfo(){
    return(<>          <h4>
        Our implementation of Flop Trumps has several differences from the
        original, as a single player experience, you will be playing for
        points against "the computer". Cards randomly generated in place of
        a deck being divided.
        <br />
        The core gameplay loop is the exact same as the original
      </h4></>)
}