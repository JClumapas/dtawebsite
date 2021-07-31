import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import "style.css";
import "tailwindcss/dist/base.css";
import Home from "pages/Home";
import OpenTournaments from "pages/OpenTournament";
import NotFound from "pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/open-tournaments" component={OpenTournaments} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
