import { Link } from "react-router-dom"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayout from "../components/Layouts/AuthLayout"

const RegisterPage = () => {
    return (
       <AuthLayout title="Register">
            <FormRegister />
            <p className="mt-5 text-sm">Already have an account? { " " } 
                <Link to="/login" className="text-center font-bold text-blue-600">Sign In</Link>
                </p>
       </AuthLayout>
    )
}

export default RegisterPage