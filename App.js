import { StyleSheet, Text, View } from "react-native";
import { Router, Route, Link } from "./react-router";
import Nav from "./Nav"

function App (){
  return(
    <Router>
        <Nav></Nav>
        <Route exact path="/" />
        <Route path="/about" />
    </Router>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default App;
