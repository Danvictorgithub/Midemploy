// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user";
import env from "#start/env";
import { resendEmailValidator } from "#validators/resend_email";
import { HttpContext } from "@adonisjs/core/http";
import mail from "@adonisjs/mail/services/main";
import { errors } from "@vinejs/vine";

export default class ResendEmailVerificationsController {
  async resend_email_verification({ request, response }: HttpContext) {
    const payload = await request.validateUsing(resendEmailValidator);
    const user = await User.findBy('email', payload.email)
    if (!user) {
      throw new errors.E_VALIDATION_ERROR({
        message: 'Email does not exist'
      })
    }
    if (user.isEmailVerified) {
      response.badRequest({ message: 'Email already verified' });
    }
    const existingEmailVerification = await user.related('emailVerification').query().first();
    if (existingEmailVerification) {
      await existingEmailVerification.delete();
    }
    const emailVerification = await user.related('emailVerification').create({});
    mail.sendLater((message) => {
      message
        .to(payload.email)
        .from("midemploy@gmail.com")
        .htmlView("emails/verify_email", { fullName: user.fullName, redirect: `${env.get('BACKEND_URL')}/verifyEmail/${emailVerification.id}`, logo: `${env.get('BACKEND_URL')}/favicon.png` })
    })
    return { message: 'Email verification sent successfully' };
  }
}
