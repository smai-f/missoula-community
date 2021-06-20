import "./App.css";
import Calendar from "./pages/Calendar";
// import Login from "./components/Login";
import Home from "./pages/Home";
import Layout from "./Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

type AppComponent = React.FC;

const App: AppComponent = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
