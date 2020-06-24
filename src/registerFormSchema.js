import * as Yup from "yup";


const registerFormSchema = Yup.object().shape({
    
    username: Yup
    .string()
    .min(6, "Username must have at least 6 characters.")
    .required("Required!"),

    email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Required!"),

    password: Yup
    .string()
    .min(6, "Password must have at least 6 characters.")
    .required("Required!"),

    terms: Yup
    .boolean()
    .oneOf([true], "Please agree with our terms of service!"),
});

export default registerFormSchema;