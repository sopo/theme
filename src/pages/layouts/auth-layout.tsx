import { Outlet } from "react-router"

const AuthLayout=()=>{

    return(

    <div className="w-full h-screen flex gap-4  bg-neutral-100">
      <img className="flex-1 max-w-1/2 object-cover" src="https://cdn.dribbble.com/userupload/14447068/file/original-c7a2690b6e28b2df0f1ce65e352243d8.png?format=webp&resize=1440x&vertical=center" />
      <div className="flex-1">

    <Outlet />
      </div>

</div>
    )
}
export default AuthLayout