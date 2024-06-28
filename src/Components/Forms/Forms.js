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

        ValidationForFields(event, key);
    };

    function ValidationForFields(event, key){
        const value = String(event.target.value);

        if(key === "firstName"){
            const nameregex = /^[A-Za-z]+$/;
            const regexVal = value.match(nameregex);
            if(!regexVal){
                setErrorState((old) => {
                    return{
                    ...old,
                    firstName: "Hey we should write good names what is this?",
                    };
                })
            }
        }
        else if(key === "secondName"){}
        else if(key === "email"){}
        else if(key === "phone"){}
        else{}
    }

    return (
        <>
            <form>
                <br />
                <label htmlFor='firstName'>firstName*</label>
                <input type='text' id='firstName' onChange={(event) => {
                    onChangeHandler(event, "firstName")
                }} />
                <div style={{color:"red", fontWeight:"bold"}}>{errorState.firstName}</div>

                <br />
                <label htmlFor='secondName'>secondName*</label>
                <input type='text' id='secondName' onChange={(event) => {
                    onChangeHandler(event, "secondName")
                }} />
                <div style={{color:"red", fontWeight:"bold"}}>{errorState.secondName}</div>

                <br />
                <label htmlFor='email'>email*</label>
                <input type='email' id='email' onChange={(event) => {
                    onChangeHandler(event, "email")
                }} />
                <div style={{color:"red", fontWeight:"bold"}}>{errorState.email}</div>

                <br />
                <label htmlFor='phone'>phoneNo*</label>
                <input type='number' id='phone' onChange={(event) => {
                    onChangeHandler(event, "phone")
                }} />
                <div style={{color:"red", fontWeight:"bold"}}>{errorState.phone}</div>

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