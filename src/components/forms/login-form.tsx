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
  CardDescription,
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



const LoginForm = () => {
    const [inputType, setInputType]=useState<"text" | "password">("password")
  const formSchema = z.object({
    email: z
      .email({message: "Enter valid e-mail"})
      .min(5, "Email must be at least 5 characters")
      .max(32, "Email must be at most 32 characters"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must be at most 100 characters"),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Log in Form</CardTitle>
        <CardDescription>
         Log in to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <form id="login" onSubmit={form.handleSubmit(onSubmit)} >
          <FieldGroup>
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
             <Button variant="link" className="self-end">
            Forgot password
             </Button>
      </CardContent>
      <CardFooter>
   
        <Field orientation="horizontal">
            
          <Button type="submit" form="login">
            Log In
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};
export default LoginForm;
