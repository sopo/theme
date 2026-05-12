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
import ControlledField from "../controlled-field";

const ResetPasswordForm = () => {
  const formSchema = z.object({
    email: z
      .email({ message: "Enter valid e-mail" })
      .min(5, "Email must be at least 5 characters")
      .max(32, "Email must be at most 32 characters"),

  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",

    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Enter your email to receive link</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <form id="resetPassword" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <ControlledField
              name="email"
              placeholder="Enter E-mail"
              label="Email"
              control={form.control}
            />
       
          </FieldGroup>
        </form>
     
      </CardContent>
      <CardFooter >
        <Field orientation="horizontal">
          <Button type="submit" form="resetPassword">
            Send Link
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};
export default ResetPasswordForm;
