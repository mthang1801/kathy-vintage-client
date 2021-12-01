import { createSelector } from 'reselect';

export const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  selectUser,
  (user) => user.user
);

export const selectUserLoading = createSelector(
  selectUser,
  (user) => user.loading
);

export const selectUserFetched = createSelector(
  selectUser,
  (user) => user.fetched
);

export const selectUserError = createSelector(selectUser, (user) => user.error);
