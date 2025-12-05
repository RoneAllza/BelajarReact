import { Link } from "react-router-dom"

const AuthLayout = ( props ) => {
    const { children , title, type} = props
    return(
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600 ">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, please enter your details
                </p>
                {children}
                <p className="text-sm mt-5">{type === "login" ? "Don't have an account?" : "Already have an account?"} { " " }
                    <Link to={type === 'login' ? '/register' : '/login'} className="text-center font-bold text-blue-600">{type === "login" ? "Sign Up" : "Sign In"}</Link>
                </p>
                {/* Kalau mau conditional yang lain, contohnya dibawah 
                Contoh 1:
                {
                    type === "login" && (
                        <Link to="/register" className="text-center font-bold text-blue-600">Sign Up</Link>
                    )
                }

                Contoh 2 itu pakai 'if', setelah buat komponen di bawah, panggil aja kek gini:
                <Navigation type={type} />

                */}

            </div>
        </div>
    )
}

const Navigation = ({type}) => {
    if (type === 'register') {
        return (
            <p className="text-sm mt-5">Already have an account? <Link to="/login" className="text-center font-bold text-blue-600">Sign In</Link></p>
        )
    } 
    if (type === 'login') {
        return (
            <p className="text-sm mt-5">Don't have an account? <Link to="/register" className="text-center font-bold text-blue-600">Sign Up</Link></p>
        )
    }
}

export default AuthLayout