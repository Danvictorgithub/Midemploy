/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthenticationController from '#controllers/authentication_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import VerifyEmailController from '#controllers/verify_emails_controller'
import ResendEmailVerificationsController from '#controllers/resend_email_verifications_controller'
// import UploadController from '#controllers/upload_controller'

router.get('/', async () => {
  return {
    message: "Welcome to Midemploy API v1.0.0"
  }
})
router.resource("users", UsersController).apiOnly()
router.group(() => {
  router.post('login', [AuthenticationController, 'login'])
  router.post('register', [AuthenticationController, 'register'])
  router.get('logout', [AuthenticationController, 'logout']).use(middleware.auth())
  router.get('', [AuthenticationController, 'validate']).use(middleware.auth())
}).prefix("auth")

router.get('verifyEmail/:id', [VerifyEmailController, 'verify_email'])
router.post('resendEmailVerification', [ResendEmailVerificationsController, 'resend_email_verification'])
// router.post("upload", [UploadController, 'upload']);
