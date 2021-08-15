import * as React from "react";


export const Coder = (props) =>
    <div className="coders">
        <div>{props.coders.name}</div>
        <div>{props.coders.lastName}</div>
        <div>{props.coders.age}</div>
        <div>{props.coders.phoneNumber}</div>
        <div>{props.coders.eMail}</div>
        <div>{props.coders.country}</div>
        <div>{props.coders.studies}</div>
        <div>{props.coders.address}</div>
        <div>{props.coders.promotion}</div>
    </div>


