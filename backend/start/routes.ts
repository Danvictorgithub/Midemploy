/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    message: "Welcome to Midemploy API v1.0.0"
  }
})

router.resource('users', UsersController).apiOnly()
