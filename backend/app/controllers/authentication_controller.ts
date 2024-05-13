// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user";
import { loginValidtor } from "#validators/login";
import { HttpContext } from "@adonisjs/core/http";
import UsersController from "./users_controller.js";
import { inject } from "@adonisjs/core";

@inject()
export default class AuthenticationController {
  constructor(private readonly usersController: UsersController) { }
  async login({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidtor);
    const user = await User.verifyCredentials(email, password);
    const token = await User.accessTokens.create(user);
    return { access_token: token.value?.release() }
  }
  async validate({ auth }: HttpContext) {
    const user = await auth.authenticate();
    return user
  }
  async register(ctx: HttpContext) {
    return this.usersController.store(ctx);
  }
  async logout({ auth }: HttpContext) {
    const user = auth.user
    await User.accessTokens.delete(user as User, auth.user?.currentAccessToken.identifier as string);
    return { message: "User logged Out" }
  }
}
