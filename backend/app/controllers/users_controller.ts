import User from '#models/user'
import { createUserValidator, updateUserValidor } from '#validators/users'
import type { HttpContext } from '@adonisjs/core/http'
import { errors } from '@vinejs/vine';

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ }: HttpContext) {
    return User.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    // const data = request.only(["fullName", "email", "password", "type"])
    const payload = await request.validateUsing(createUserValidator);
    const user = await User.findBy('email', payload.email)
    if (user) {
      throw new errors.E_VALIDATION_ERROR({
        message: 'Email already exists'
      })
    }
    return User.create(payload);
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return User.findOrFail(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const payload = await request.validateUsing(updateUserValidor);
    return user.merge(payload).save()
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return user;
  }
}
