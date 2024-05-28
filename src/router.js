import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import sessionController from './controlers/sessionController'

const routes = new Router()

routes.post('/session', sessionController.store)

export default routes