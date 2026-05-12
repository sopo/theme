import LoginForm from "@/components/forms/login-form"
import RegisterForm from "@/components/forms/register-form"

const FormComponents=()=>{
    return(
        <div className="flex flex-col gap-4">
            <LoginForm />
            <RegisterForm />
        </div>
    )
}
export default FormComponents