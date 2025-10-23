import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormLogin = () => {
    return (
        <form action="">
        <InputForm label="Email" name="email" type="email" placeholder="Email" />
        <InputForm label="Password" name="password" type="password" placeholder="*****" />
        <Button classname="bg-blue-600 w-full">Sign In</Button>
      </form>
    )
}

export default FormLogin