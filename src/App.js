import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Page404 from "./Components/Page404/Page404";
import Home from "./Pages/Home";

function App() {
  return (
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Page404} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
