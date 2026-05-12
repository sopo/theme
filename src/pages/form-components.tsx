import LoginForm from "@/components/forms/login-form/login-form"
import RegisterForm from "@/components/forms/register-form/register-form"
import ResetPasswordForm from "@/components/forms/reset-password-form/reset-password-form"

const FormComponents=()=>{
    return(

        <div className="flex flex-col gap-4 w-full">
            <LoginForm />
            <RegisterForm />
            <ResetPasswordForm />
        </div>

    )
}
export default FormComponents