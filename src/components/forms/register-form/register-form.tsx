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
import ControlledField from "@/components/controlled-field";
import { useTranslation } from "react-i18next";
import createRegisterSchema from "./schema";
import { ArrowRight } from "lucide-react";


const RegisterForm = () => {
  const navigate = useNavigate();
  const {t}=useTranslation()
const schema=createRegisterSchema(t)
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
  }

  return (
    <Card className="mt-40 w-full sm:max-w-md mx-auto bg-neutral-100 ring-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
           <div className="flex items-center">
          Already have an account?
          <div>
            <Button variant="link" onClick={() => navigate("/auth/log-in")}>
              Log In
            </Button>
          </div>
        </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="register" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <ControlledField
              name="name"
              placeholder="Enter your name"
              label="Name"
              control={form.control}
            />

            <ControlledField
              name="email"
              placeholder="Enter Email"
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
      <CardFooter className="flex flex-col gap-4 items-start">
        <Field orientation="horizontal">
          <Button size="xl" type="submit" form="register">
            Register
            <ArrowRight />
          </Button>
        </Field>
       
      </CardFooter>
    </Card>
  );
};
export default RegisterForm;
