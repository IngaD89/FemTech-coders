import * as React from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {useState} from "react";

export default function PhoneInputField() {

    const [value, setValue] = useState()
    return (
        <PhoneInput
            defaultCountry="ES"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}/>
    )
}