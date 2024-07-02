import { supabaseService } from '#services/supabase_service'
import { inject } from '@adonisjs/core'
import type { ApplicationService } from '@adonisjs/core/types'

@inject()
export default class SupabaseProvider {
  constructor(protected app: ApplicationService) { }

  /**
   * Register bindings to the container
   */
  register() {
    // Initializes Supabase and checks validity of the configuration
    this.app.container.bind("supabase" as any, () => {
      const service = new supabaseService()
      return service.init();
    });
  }

  /**
   * The container bindings have booted
   */
  async boot() {
    // Resolves promise self and applies new class to the container
    const supabase = await this.app.container.make("supabase" as any) as supabaseService
    this.app.container.bind("supabase" as any, () => supabase);
  }

  /**
   * The application has been booted
   */
  async start() {
    if (this.app.getEnvironment() === 'web') {
      console.log("Supabase Provider is ready");
    }
  }

  /**
   * The process has been started
   */
  async ready() {
    // console.log("Supabase Provider is ready");
  }

  /**
   * Preparing to shutdown the app
   */
  async shutdown() { }
}
