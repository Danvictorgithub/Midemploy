// import type { HttpContext } from '@adonisjs/core/http'

import EmailVerification from "#models/email_verification";
import { HttpContext } from "@adonisjs/core/http";

export default class VerifyEmailController {
  async verify_email({ params, response }: HttpContext) {
    const emailVerification = await EmailVerification.findOrFail(params.id);
    const user = await emailVerification.related('user').query().firstOrFail();
    if (user.isEmailVerified) {
      return response.badRequest({ message: 'Email already verified' });
    }
    user.isEmailVerified = true;
    await user.save();
    await emailVerification.delete();
    return { message: 'Email verified successfully' };
  }
}
