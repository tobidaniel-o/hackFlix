import Catalogue from "./Catalogue";
import MovieDetails from "./MovieDetails";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>HackFlix</h1>
        </header>
        <Route path="/" exact component={Catalogue} />
       <Route path="/movie/:movieID" exact component={MovieDetails}/>
      </div>
    </Router>
  );
}

export default App;
