import "./App.css";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Layout from "./Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

type AppComponent = React.FC;

const App: AppComponent = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
