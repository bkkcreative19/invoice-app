import "./main.scss";
import Nav from "./components/common/Nav/Nav";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { InvoiceProvider } from "./context/InvoiceContext";

const App = () => {
  return (
    <InvoiceProvider>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </InvoiceProvider>
  );
};

export default App;
