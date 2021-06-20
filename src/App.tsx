import "./App.css";
import Calendar from "./components/Calendar";

type AppComponent = React.FC;

const App: AppComponent = () => {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
};

export default App;
