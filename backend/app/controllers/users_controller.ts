import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ }: HttpContext) {
    return { message: "List of users" }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) { }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) { }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    return { params, request }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) { }
}
