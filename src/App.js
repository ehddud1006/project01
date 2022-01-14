import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClassicF from "./pages/ClassicF";
import RecomD from "./pages/RecomD";
import RestauR from "./pages/RestauR";
import SignUp from "./pages/SignUp";
import Inform from "./pages/Inform";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/RecomD">
                    <RecomD />
                </Route>
                <Route path="/ClassicF">
                    <ClassicF />
                </Route>
                <Route path="/RestauR">
                    <RestauR />
                </Route>
                <Route path="/Inform">
                    <Inform />
                </Route>
                <Route path="/SignUp">
                    <SignUp />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
