import LoginForm from "@/components/forms/login-form/login-form"
import RegisterForm from "@/components/forms/register-form/register-form"
import ResetPasswordForm from "@/components/forms/reset-password-form/reset-password-form"

const FormComponents=()=>{
    return(
        <div className="m-40">
        <div className="flex flex-col gap-4">
            <LoginForm />
            <RegisterForm />
            <ResetPasswordForm />
        </div>
        </div>
    )
}
export default FormComponents