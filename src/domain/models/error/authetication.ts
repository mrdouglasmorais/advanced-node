export class AutheticationError extends Error {
  constructor () {
    super('Authentication error')
    this.name = 'AuthenticationError'
  }
}
