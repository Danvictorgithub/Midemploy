import EmailVerification from '#models/email_verification';
import User from '#models/user'
import env from '#start/env';
import { createUserValidator, updateUserValidator } from '#validators/users'
import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main';

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    if (env.get('NODE_ENV') !== 'development') {
      return response.unauthorized({ message: 'Unauthorized' });
    }
    return User.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    // const data = request.only(["fullName", "email", "password", "type"])
    const payload = await request.validateUsing(createUserValidator);
    const user = await User.findBy('email', payload.email)
    if (user) {
      throw response.abort({ message: "Email already exist" });
    }
    const newUser = await User.create(payload);
    const emailVerification = await EmailVerification.create({ userId: newUser.id });
    await mail.sendLater((message) => {
      message
        .to(payload.email)
        .from("midemploy@gmail.com")
        .subject("Verify your email - Midemploy")
        .htmlView("emails/verify_email",
          {
            fullName: payload.fullName,
            redirect: `${env.get('BACKEND_URL')}/verifyEmail/${emailVerification.id}`,
            logo: `${env.get('BACKEND_URL')}/favicon.png`
          })
    })
    return newUser
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    if (env.get('NODE_ENV') !== 'development') {
      return response.unauthorized({ message: 'Unauthorized' });
    }
    return User.findOrFail(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, auth, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await auth.check();
    if (auth.user!.id !== user.id) {
      return response.unauthorized();
    } else if (env.get('NODE_ENV') !== 'development') {
      return response.unauthorized();
    }
    const payload = await request.validateUsing(updateUserValidator);
    return user.merge(payload).save()
  }

  /**
   * Delete record
   */
  async destroy({ params, auth, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await auth.check();
    if (auth.user!.id !== user.id) {
      return response.unauthorized();
    } else if (env.get('NODE_ENV') !== 'development') {
      return response.unauthorized();
    }
    await user.delete()
    return user;
  }
}
