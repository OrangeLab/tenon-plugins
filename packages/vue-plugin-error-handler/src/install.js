import {postException} from './error'
export function install(app){
  app.config.errorHandler = (err, vm, info) => {
    postException(err)
  }
}