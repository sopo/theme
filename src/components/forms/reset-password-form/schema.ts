import * as z from "zod"

const createResetPasswordSchema = (t: (key: string) => string) =>
  z.object({

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

  })
  export default createResetPasswordSchema