import "./main.scss";
import Nav from "./components/common/Nav/Nav";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { InvoiceProvider } from "./context/InvoiceContext";
import InvoiceDetails from "./pages/InvoiceDetails/InvoiceDetails";

const App = () => {
  return (
    <InvoiceProvider>
      <Nav />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/invoice/:id">
            <InvoiceDetails />
          </Route>
        </Switch>
      </div>
    </InvoiceProvider>
  );
};

export default App;
