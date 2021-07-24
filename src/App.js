import { useEffect, useRef } from "react";
import './App.css';
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/BackgroundAsImageWithCenteredContent"
import Cards from "components/cards/ThreeColSlider"
// import Cards from "components/cards/TabCardGrid"

function App() {
  // const cardsRef = useRef(null);
  // useEffect(() => {
  //   console.log(cardsRef.current);
  // }, []);
  // const [cardsRef, setCardsRef] = useState(null);
  // const gotoCards = () => cardsRef.current;

  return (
    <AnimationRevealPage>
      <Hero />
      <Cards />
    </AnimationRevealPage>
  );
}

export default App;
