import * as React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {useState} from "react";
import PhoneInput from "react-phone-input-2";
import PhoneInputField from "./PhoneInputField";





export default function Formulario() {

        const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <Formik
            initialValues={{
                    name: '',
                    lastName: '',
                    age: '',
                    phoneNumber: '',
                    eMail: '',
                    country: '',
                    studies: '',
                    address: '',
                    promotion: ''
            }}

            validate={(values) => {
                    let errores = {};
                    //validacion de nombre
                    if(!values.name) {
                            errores.name = "Please enter your name"

                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                            errores.name = "only letters and spaces allowed "
                    }

                    //validacion de email
                    if(!values.eMail) {
                            errores.eMail = "Please enter your email"
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.eMail)){
                            errores.eMail = "Invalid email address"
                    }

                    return errores;
            }}

        onSubmit={(values, {resetForm}) => {
            resetForm();
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado, 5000);
        }}
        >
                {({errors, values}) => (
        <Form>
            <label htmlFor="name">Name</label>
            <Field
                id="name"
                type="text"
                name="name"
                // pattern="^[A-Z\u00C0-\u024F\u1E00-\u1EFF][a-z\u00C0-\u024F\u1E00-\u1EFF]+.\s?([A-Z][a-z]+.)?$"
            />
                <ErrorMessage name="name" component={() => (
                    <div className="errores">{errors.name}</div>
                )} />
            <label htmlFor="lastName">Lastname</label>
            <Field
                id="lastName"
                type="text"
                name="lastName"
            />

            <label htmlFor="age">Age</label>
            <Field
                id="age"
                type="text"
                name="age"
                pattern="^\d{1,3}$"

            />

            {/*<label htmlFor="phoneNumber">Phone Number</label>*/}
            <Field
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                component={PhoneInputField}
                //defaultCountry="ES"
                //value={values.phoneNumber}
                //pattern="(\+34|0034)[\s\-.]\d{3}([\s\-.]\d{2,3}){2,3}"

            />

            <label htmlFor="eMail">Email</label>
            <Field
                id="eMail"
                type="text"
                name="eMail"
                // pattern='^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
            />
                <ErrorMessage name="eMail" component={() => (
                    <div className="errores">{errors.eMail}</div>
                )} />

            <label htmlFor="country">Country</label>
            <Field
                id="country"
                type="text"
                name="country"
            />

            <label htmlFor="studies">Studies</label>
            <Field
                id="studies"
                type="text"
                name="studies"
            />

            <label htmlFor="address">Address</label>
            <Field
                id="address"
                type="text"
                name="address"
            />

            <label htmlFor="promotion">Promotion</label>
            <Field
                id="promotion"
                type="text"
                name="promotion"
            />

            <button type="submit">Send</button>
                {formularioEnviado && <p>Form sent successfully!</p>}
        </Form>
                )}
        </Formik>

    )
}




