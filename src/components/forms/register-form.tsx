import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";

import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router";
import ControlledField from "../controlled-field";

const RegisterForm = () => {
  const navigate = useNavigate();
  const formSchema = z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be at most 20 characters"),

    email: z
      .email({ message: "Enter valid e-mail" })
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
          <Button type="submit" form="register">
            Register
          </Button>
        </Field>
        <div className="flex flex-col gap-2">
          Already have an account?
          <div>
            <Button variant="outline" onClick={() => navigate("/auth/log-in")}>
              Log In
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
export default RegisterForm;
