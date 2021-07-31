import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import "style.css";
import "tailwindcss/dist/base.css";
import Home from "pages/Home";
import OpenTournaments from "pages/OpenTournament";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/open-tournaments" component={OpenTournaments} />
      {/* <AnimationRevealPage>
        // <Hero primaryActionFun={gotoCards}/>
        // <Cards ref={cardsRef} /> }
      </AnimationRevealPage> */}
    </Router>
  );
}

export default App;
