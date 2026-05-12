import LoginForm from "@/components/forms/login-form"
import RegisterForm from "@/components/forms/register-form"

const FormComponents=()=>{
    return(
        <div className="m-40">
        <div className="flex  gap-4">
            <LoginForm />
            <RegisterForm />
        </div>
        </div>
    )
}
export default FormComponents