import { AccessToken } from '@/domain/models/';
import { AutheticationError } from '@/domain/models/error';

export interface FacebookAuthentication {
  perform: (params: FacebookAuthentication.Params) => Promise<FacebookAuthentication.Result>
}

namespace FacebookAuthentication {
  export type Params = {
    token: string
  }

  export type Result = AccessToken | AutheticationError
}
