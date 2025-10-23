import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormRegister = () => {
    return (
        <form action="">
        <InputForm label="Fullname" name="fullname" type="text" placeholder="Insert your name here e.g. Lilhab" />
        <InputForm label="Email" name="email" type="email" placeholder="Email" />
        <InputForm label="Password" name="password" type="password" placeholder="*****" />
        <InputForm label="Confirm Password" name="confirmPassword" type="password" placeholder="*****" />
        <Button classname="bg-blue-600 w-full">Sign Up</Button>
      </form>
    )
}

export default FormRegister