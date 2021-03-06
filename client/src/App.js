import logo from "./logo.svg";
import "./App.css";
import Todo from "./pages/Todo";
import AddTodo from "./pages/AddTodo";
import NavbarHome from "./components/NavbarHome";
import EditTodo from "./pages/EditTodo";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavbarHome />
        <Switch>
          <Route path="/add-todo" component={AddTodo} />
          <Route path="/edit-todo" component={EditTodo} />
          <Route path="/" component={Todo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
