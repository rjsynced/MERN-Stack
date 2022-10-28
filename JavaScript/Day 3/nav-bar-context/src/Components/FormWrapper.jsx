// should only wrap the Form Component as it's child. used to illustrate that you can use nested components with context
import React from "react";
import Form from "./Form";

const FormWrapper = () => (
    <>
        <Form />
    </>
);

export default FormWrapper;