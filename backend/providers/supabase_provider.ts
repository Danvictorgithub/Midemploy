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

    this.app.container.bind(supabaseService, () => {
      const service = new supabaseService()
      service.init()
      return service
    });
  }

  /**
   * The container bindings have booted
   */
  async boot() {
    // const supabase = await this.app.container.make(supabaseService)
    // await supabase.init();
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
