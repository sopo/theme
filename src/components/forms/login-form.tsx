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
import ControlledField from "../controlled-field";

const LoginForm = () => {
  const navigate = useNavigate();
  const formSchema = z.object({
    email: z
      .email({ message: "Enter valid e-mail" })
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
        <CardDescription>Log in to your account.</CardDescription>
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
        <Button variant="link" className="self-end">
          Forgot password
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Field orientation="horizontal">
          <Button type="submit" form="login">
            Log In
          </Button>
        </Field>
        <div className="flex flex-col gap-2">
          Do not have an account?
          <div>
            <Button
              variant="outline"
              onClick={() => navigate("/auth/register")}
            >
              Register
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
export default LoginForm;
