import { useRef } from "react";
import './App.css';
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/BackgroundAsImageWithCenteredContent"
import Cards from "components/cards/ThreeColSlider"
// import Cards from "components/cards/TabCardGrid"

function App() {
  const cardsRef = useRef(null);
  const gotoCards = () => {
    cardsRef.current.scrollIntoView({
      inline: 'end'
    });
    cardsRef.current.scrollLeft = 0;
  }

  return (
    <AnimationRevealPage>
      <Hero primaryActionFun={gotoCards}/>
      <Cards ref={cardsRef} />
    </AnimationRevealPage>
  );
}

export default App;
