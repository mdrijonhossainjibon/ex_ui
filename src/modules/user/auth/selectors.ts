export const selectSignInRequire2FA = (state) => state.users.auth.require2FA;

export const selectSignUpRequireVerification = (state) =>
  state.users.auth.requireVerification;

export const selectEmailVerified = (state) => state.users.auth.emailVerified;
