import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CurrentUserService } from '@data/service/CurrentUser.service';
import { Observable, map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const currentUser = inject(CurrentUserService);
  const router = inject(Router);
  if (currentUser.isLoggedIn()) {
    return currentUser.isLoggedIn();
  } else {
    const urltree = router.createUrlTree(['/login']);
    return urltree;
  }
};

export const authGuardAdmin: CanActivateFn = (route, state) => {
  const currentUser = inject(CurrentUserService);
  const router = inject(Router);

  return currentUser.user.pipe(
    map((user) => {
      if (user?.role == 1) {
        return true;
      } else {
        const urltree = router.createUrlTree(['/home']);
        return urltree;
      }
    }));
};