import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router";
import ControlledField from "../../controlled-field";
import createLoginSchema from "./schema";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";


const LoginForm = () => {
  const navigate = useNavigate();
  const {t} = useTranslation()

  const schema=createLoginSchema(t)
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
  }

  return (

    <Card className="mt-40 w-full sm:max-w-md mx-auto bg-neutral-100 ring-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Log in Form</CardTitle>
        <CardDescription>
          <div className="flex items-center">
          Do not have an account?
          <div>
            <Button
              variant="link"
              onClick={() => navigate("/auth/register")}
            >
              Register
            </Button>
          </div>
      
        </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <form id="login" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <ControlledField
              name="email"
              placeholder="Enter E-mail"
              label="Email"
              control={form.control}
            />
         
            <ControlledField
              name="password"
              placeholder="Enter Password"
              label="Password"
              control={form.control}
              type="password"
            />

                 
          </FieldGroup>
        </form>
    
      </CardContent>
      <CardFooter className="flex flex-col gap-16 items-start">
        <Field orientation="horizontal">
          <Button size="xl" type="submit" form="login">
            Log In
           <ArrowRight />
          </Button>
        </Field>
        <Button variant="link" onClick={()=>navigate("/auth/reset-password")} >
          Forgot password
        </Button>
        
      </CardFooter>
    </Card>

  );
};
export default LoginForm;
