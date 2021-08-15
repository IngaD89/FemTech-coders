import * as React from "react";
import {Coder} from "./Coder";


export const CodersList = (props) => (
    <section className="codersSection">
        {props.coders.map(coder =>
            <Coder coders={coder}/>
        )}
    </section>
);