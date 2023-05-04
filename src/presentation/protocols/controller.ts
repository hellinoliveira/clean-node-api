import { type HttpRequest } from './https'

export interface Controller {
  handle: (httpRequest: HttpRequest) => any
}
