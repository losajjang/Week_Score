import "./App.css";
import { Route } from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/detail/:day" exact>
        <Detail />
      </Route>
    </div>
  );
}

export default App;
