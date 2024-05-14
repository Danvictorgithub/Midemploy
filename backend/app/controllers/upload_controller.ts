// import type { HttpContext } from '@adonisjs/core/http'

import { supabaseService } from "#services/supabase_service";
import { HttpContext } from "@adonisjs/core/http";
import app from "@adonisjs/core/services/app";

export default class UploadController {

  async upload({ request }: HttpContext) {
    const file = request.file("file")
    if (!file) {
      return { message: "No file uploaded" };
    }
    const link = await (await app.container.make(supabaseService)).uploadImage(file);
    return { link };
  }
}
