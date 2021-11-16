import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import loadable from "@loadable/component";
import { Popular } from "@/pages/popular/index.js";
// import Battle from "@/pages/battle.js" ;
import Result from "@/pages/result.js";
import Tabbar from "@/components/tabbar.js";
import Footer from "@/components/footer.js";
import "../../config/axios";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "font-awesome/css/font-awesome.min.css";
import "../../assets/css/reset.css";
import "@/styles/index.css";
import "@/styles/index.less";

const LazyBattle = loadable(() => import("@/pages/battle"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <HashRouter>
          <Tabbar />
          <Switch>
            <Route exact path="/">
              <Popular />
            </Route>
            <Route path="/popular">
              <Popular />
            </Route>
            <Route exact path="/battle">
              <LazyBattle />
            </Route>
            <Route path="/battle/result">
              <Result />
            </Route>
          </Switch>
        </HashRouter>
        <Footer />
      </>
    );
  }
}
export default hot(App);
