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
import ControlledField from "../../controlled-field";
import { useTranslation } from "react-i18next";
import createResetPasswordSchema from "./schema";
import { ArrowRight } from "lucide-react";

const ResetPasswordForm = () => {
const {t}=useTranslation()
const schema =createResetPasswordSchema(t)
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",

    },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
  }

  return (
    <Card className="mt-40 w-full sm:max-w-md mx-auto bg-neutral-100 ring-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Reset Password</CardTitle>
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
          <Button size="xl" type="submit" form="resetPassword">
            Send Link
               <ArrowRight />
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};
export default ResetPasswordForm;
