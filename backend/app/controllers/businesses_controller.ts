import Business from '#models/business'
import User from '#models/user';
import env from '#start/env';
import { createBusinessValidator } from '#validators/business';
import type { HttpContext } from '@adonisjs/core/http'

export default class BusinessesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    if (env.get('NODE_ENV') !== 'development') {
      return response.unauthorized();
    }
    return Business.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ auth, request, response }: HttpContext) {
    const payload = await request.validateUsing(createBusinessValidator);
    await auth.check();
    if (auth.isAuthenticated) {
      payload.userId = auth.user!.id;
    }
    else if (env.get('NODE_ENV') !== 'development') {
      return response.unauthorized();
    }
    if (!payload.userId) {
      return response.badRequest({ message: 'User not found' });
    }
    const user = await User.find(payload.userId);
    if (!user) {
      return response.notFound({ message: 'User not found' });
    }
    await user?.load('business')
    if (user?.business) {
      return response.badRequest({ message: 'User already has a business' });
    }
    const business = await Business.create(payload);
    return business;
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Business.findOrFail(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ auth, response, params, request }: HttpContext) {
    const business = await Business.findOrFail(params.id)
    const payload = await request.validateUsing(createBusinessValidator);
    await auth.check();
    if (auth.isAuthenticated && auth.user!.id === business.userId) {
      payload.userId = auth.user!.id;
    }
    else if (env.get('NODE_ENV') !== 'development') {
      return response.unauthorized({ message: 'Unauthorized' });
    }
    return business.merge(payload).save()
  }

  /**
   * Delete record
   */
  async destroy({ params, auth, response }: HttpContext) {
    const business = await Business.findOrFail(params.id)
    await auth.check();
    if (env.get('NODE_ENV') !== 'development') {
      return response.unauthorized({ message: 'Unauthorized' });
    }
    else if (auth.isAuthenticated && auth.user!.id !== business.userId) {
      return response.unauthorized({ message: 'Unauthorized' });
    }
    await business.delete()
    return business;
  }
}
