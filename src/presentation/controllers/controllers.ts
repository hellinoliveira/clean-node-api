import { type HttpRequest } from '../protocols/https'

export interface Controller {
  handle: (httpRequest: HttpRequest) => any
}
