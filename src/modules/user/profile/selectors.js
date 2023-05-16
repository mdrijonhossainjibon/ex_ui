export const selectChangePasswordSuccess = (state) =>
  state.users.profile.passwordChange.success;

export const selectTwoFactorAuthQR = (state) =>
  state.users.profile.twoFactorAuth.url;

export const selectTwoFactorAuthBarcode = (state) =>
  state.users.profile.twoFactorAuth.barcode;

export const selectTwoFactorAuthSuccess = (state) =>
  state.users.profile.twoFactorAuth.success;

export const selectUserLoggedIn = (state) => {
  const {
    users: { profile },
  } = state;

  return (
    !profile.userData.isFetching && profile.userData.user.state === "active"
  );
};

export const selectUserInfo = (state) => state.users.profile.userData.user;

export const selectUserFetching = (state) =>
  state.users.profile.userData.isFetching;

export const selectUserDataChange = (state) =>
  state.users.profile.userData.success;
