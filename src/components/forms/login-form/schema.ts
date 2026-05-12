import * as z from "zod"

const createLoginSchema = (t: (key: string) => string) =>
  z.object({
    email: z
      .email({
        message: t("validation.email.invalid"),
      })
      .min(5, {
        message: t("validation.email.min"),
      })
      .max(32, {
        message: t("validation.email.max"),
      }),

    password: z
      .string()
      .min(8, {
        message: t("validation.password.min"),
      })
      .max(100, {
        message: t("validation.password.max"),
      }),
  })
  export default createLoginSchema