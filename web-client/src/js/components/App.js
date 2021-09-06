import * as React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import NavigationBar from "./NavigationBar";
import {useEffect, useState} from "react";
import {CoderApi} from "../apis/CoderApi";
import Formulario from "./Formulario";
import {CodersList} from "./CodersList";


export default function App() {

    const coderApi = new CoderApi()

    const [coders, setCoders] = useState([])

    const [needsUpdate, setNeedsUpdate] = useState(true)


    useEffect(() => {
        if (needsUpdate) {
            coderApi.getCoders()
            .then(setCoders)
                .then(_ => setNeedsUpdate(false))
        }
    },[needsUpdate])


    const saveCoder = coder =>
        coderApi.saveCoder(coder)
            .then(response => response.json())
            .then(_ => setNeedsUpdate(true))




    return <Router>

        <NavigationBar/>

        <Switch>
            <Route exact path={["/"]}>
                <CodersList coders={coders}/>
            </Route>
            <Route path="/add">
                <Formulario onSubmit={saveCoder}/>
            </Route>
        </Switch>

    </Router>
}