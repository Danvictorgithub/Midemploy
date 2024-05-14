import env from "#start/env";
import { MultipartFile } from "@adonisjs/core/bodyparser";
import { SupabaseClient, createClient } from "@supabase/supabase-js"
import { errors } from "@vinejs/vine";
import { randomUUID } from "crypto";
import fs from "fs";
export class supabaseService {

  private supabase!: SupabaseClient
  public async init() {
    try {
      this.supabase = createClient(env.get('SUPABASE_URL'), env.get('SUPABASE_KEY'));

      // Perform a test query to check the validity of the Supabase key
      const { error } = await this.supabase.from('').select('*').limit(1);

      if (error) {
        throw new Error(`Error performing test query: ${error.message}`);
      }

      console.log('Supabase Initialized');
      return this.supabase;
    } catch (error) {
      console.error('Error initializing Supabase:', error.message);
      throw new Error('Error initializing Supabase');
    }
  }
  async uploadImage(file: MultipartFile) {
    // Uploads File image and returns public link
    const fileBuffer = fs.readFileSync(file.tmpPath!);
    const { data, error } = await this.supabase.storage
      .from('files')
      //Generates random filename
      .upload(`${file.fieldName}/${randomUUID()}.${file.clientName.split('.').pop()}`, fileBuffer, { contentType: file.type });
    if (error) {
      // throw new UnprocessableEntityException(error);
      throw new errors.E_VALIDATION_ERROR({ message: "Error Uploading File" });
    }
    const link = await this.supabase.storage.from('files').getPublicUrl(data.path).data.publicUrl;
    return link;
  }

  async deleteImage(fileName: string) {
    // Deletes file from storage
    const { error } = await this.supabase.storage.from('files').remove([fileName]);
    if (error) {
      // throw new UnprocessableEntityException(error);
      throw new errors.E_VALIDATION_ERROR({ message: "Error Deleting File" });
    }
    return { message: `Successfully Removed File ${fileName}` };
  }
  isSupabaseUrl(url: string) {
    const supabaseUrlPattern = /^https?:\/\/[^\/]*\.supabase\.co/;
    return supabaseUrlPattern.test(url);
  };
  getFilenameFromSupabaseUrl(url: string) {
    const urlObject = new URL(url);
    const pathname = urlObject.pathname;
    const filename = pathname.split('/').slice(-2);

    return `${filename[0]}/${filename[1]}`;
  }
}
