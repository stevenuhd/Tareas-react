import React from "react";
import { Switch, Route } from "react-router-dom";

//styles
import "./App.css";

// Pages
import HomePage from "./pages/homepage/homepage";

// Component
import Header from "./components/header/header.component";
// import CollectionItem from "./components/collection-item/collection-item.component";
// import Footer from "./components/footer/footer.component";

// css

//firebase
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: "",
    };
  }

  unsubscribeFromAuth = null;

  // Ciclos de vida
  // ciclo de vida: montado
  componentDidMount() {
  }

  // ciclo de vida: desmontado
  componentWillUnmount() {
  }

  render() {
    return (
 
      <div >
         <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
 

      </div>
 
    );
  }
}

export default App;
