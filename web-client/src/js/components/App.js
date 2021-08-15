import * as React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavigationBar from "./NavigationBar";
import {useEffect, useState} from "react";
import {CoderApi} from "../apis/CoderApi";
import Formulario from "./Formulario";
import {CodersList} from "./CodersList";


export default function App() {

    const [coders, setCoders] = useState([])

    useEffect(() => {
        let coderapi = new CoderApi()
            coderapi.getCoders()
            .then(setCoders)
    })


    return <Router>

        <NavigationBar/>

        <Switch>
            <Route exact path={["/", "/coders"]}>
                <CodersList coders={coders}/>
            </Route>
            <Route path="/add">
                <Formulario />
            </Route>
        </Switch>

    </Router>
}