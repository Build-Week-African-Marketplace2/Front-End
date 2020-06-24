import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    username: Yup
    .string()
    .min(6, "Username must have at least 6 characters.")
    .required("Required!"),

    password: Yup
    .string()
    .min(6, "Password must have at least 6 characters.")
    .required("Required!"),
})

export default loginFormSchema;