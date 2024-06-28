import React, { useState } from 'react'

function Forms() {

    const DEFFAULT_VALUE_OF_FORMS = {
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
        dob: "",
    };
    
    const DEFFAULT_ERROR_OF_FORMS = {
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
    };
    
    const [form, setForm] = useState(DEFFAULT_VALUE_OF_FORMS);
    const [errorState, setErrorState] = useState(DEFFAULT_ERROR_OF_FORMS);

    console.log("latest Form", form);

    function onChangeHandler(event, key) {
        setForm((oldVal) => {
            return {
                ...oldVal,
                [key]: event.target.value,
            }
        })
    };

    return (
        <>
            <form>
                <br />
                <label htmlFor='firstName'>firstName*</label>
                <input type='text' id='firstName' onChange={(event) => {
                    onChangeHandler(event, "firstName")
                }} />

                <br />
                <label htmlFor='secondName'>secondName*</label>
                <input type='text' id='secondName' onChange={(event) => {
                    onChangeHandler(event, "secondName")
                }} />

                <br />
                <label htmlFor='email'>email*</label>
                <input type='email' id='email' onChange={(event) => {
                    onChangeHandler(event, "email")
                }} />

                <br />
                <label htmlFor='phone'>phoneNo*</label>
                <input type='number' id='phone' onChange={(event) => {
                    onChangeHandler(event, "phone")
                }} />

                <br />
                <label htmlFor='gender'>Gender</label>
                <select id='gender' onChange={(event) => {
                    onChangeHandler(event, "gender")
                }}>
                    <option value={0}>Choose from below</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={3}>Dont want to share</option>
                </select>

                <br />
                <label htmlFor='dob'>DOB*</label>
                <input type='date' id='dob' onChange={(event) => {
                    onChangeHandler(event, "dob")
                }} />

                <br />

                <input type='submit' value="submit" />
            </form>
        </>
    )
}

export default Forms