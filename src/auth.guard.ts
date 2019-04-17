import { CanActivate, ExecutionContext, Injectable, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FIREBASE_ADMIN } from './constantes';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(@Inject(FIREBASE_ADMIN) private firebase: any) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const { authorization } = request.headers;

    if (authorization) {
      const arr = authorization.split(' ');
      if (arr.length > 1) {
        const token = arr[1];

        if (token && token.length > 100 && token.length < 2048) {
          return this.firebase.auth().verifyIdToken(token).then(({uid}) => {
            return this.firebase.auth().getUser(uid);
          }).then(user => {
              request._user = user;
              request.user = user.toJSON();
              return true;
          }).catch(error => {
            request.props = Object.assign(request.props || {}, {auth_error: error.errorInfo});
            return false;
          });
        }
      }
    }

    return false;
  }
}
