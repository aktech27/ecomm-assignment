import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Product from "./screens/Product";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
