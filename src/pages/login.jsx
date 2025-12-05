import { Link } from "react-router-dom"
import FormLogin from "../components/Fragments/FormLogin"
import AuthLayout from "../components/Layouts/AuthLayout"

const LoginPage = () => {
    return (
       <AuthLayout title="Sign In" type="login">
            <FormLogin />
       </AuthLayout>
    )
}

export default LoginPage