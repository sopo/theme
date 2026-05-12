import * as z from "zod"

const createRegisterSchema = (t: (key: string) => string) =>
  z.object({
     name: z
      .string()
      .min(2, {
        message: t("validation.name.min"),
      })
      .max(20, {
        message: t("validation.name.max"),
      }),

    email: z
      .email({
        message: t("validation.email.invalid"),
      })
      .min(5, {
        message: t("validation.email.min"),
      })
      .max(20, {
        message: t("validation.email.max"),
      }),

    password: z
      .string()
      .min(8, {
        message: t("validation.password.min"),
      })
      .max(20, {
        message: t("validation.password.max"),
      }),
  })
  export default createRegisterSchema