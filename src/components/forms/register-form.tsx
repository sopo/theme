import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";



const RegisterForm = () => {
    const navigate=useNavigate()
    const [inputType, setInputType]=useState<"text" | "password">("password")
  const formSchema = z.object({
          name: z
      .string()
      .min(2, "Name must be at least 2 characters")
       .max(20, "Name must be at most 20 characters"),

    email: z
      .email({message: "Enter valid e-mail"})
      .min(5, "Email must be at least 5 characters")
      .max(20, "Email must be at most 20 characters"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters"),

  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="register" onSubmit={form.handleSubmit(onSubmit)} >
          <FieldGroup>
              <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">
                   Your Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter name"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">
                    E-mail
                  </FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="E-mail"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      id="password"
                      type={inputType}
                      placeholder="Enter password"
                    />
                    <InputGroupAddon align="inline-end">
                     {inputType==="password"? <EyeOffIcon className="cursor-pointer" onClick={()=>setInputType("text")}/>
                     : <EyeIcon className="cursor-pointer" onClick={()=>setInputType("password")}/>}
                    </InputGroupAddon>
                  
                  </InputGroup>
                     {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start" >
   
        <Field orientation="horizontal">
            
          <Button type="submit" form="register">
            Register
          </Button>
        </Field>
          <div className="flex flex-col gap-2">
             Already have an account?
             <div>
          <Button variant="outline" onClick={()=>navigate("/auth/log-in")} >
            Log In
          </Button>
          </div>
        </div>
       
      </CardFooter>
    </Card>
  );
};
export default RegisterForm;
