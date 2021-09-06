import * as React from "react";
import {Link} from "react-router-dom";



export default function Coder (props) {



  return (  <div className="coders">
          <div key={props.coders.id}/>
        <div>{props.coders.name}</div>
        <div>{props.coders.lastName}</div>
        <div>{props.coders.age}</div>
        <div>{props.coders.phoneNumber}</div>
        <div>{props.coders.eMail}</div>
        <div>{props.coders.country}</div>
        <div>{props.coders.studies}</div>
        <div>{props.coders.address}</div>
        <div>{props.coders.promotion}</div>
        <Link to={`/coders/edit/${id}`}>
            <button>edit</button>
        </Link>
        <button>delete</button>

    </div>
  )
}
