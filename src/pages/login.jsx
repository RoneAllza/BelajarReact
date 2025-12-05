import { Link } from "react-router-dom"
import FormLogin from "../components/Fragments/FormLogin"
import AuthLayout from "../components/Layouts/AuthLayout"

const LoginPage = () => {
    return (
       <AuthLayout title="Sign In">
            <FormLogin />
            <p className="text-sm mt-5">Don't have an account? { " " }
                <Link to="/register" className="text-center font-bold text-blue-600">Sign Up</Link>
                </p>
       </AuthLayout>
    )
}

export default LoginPage