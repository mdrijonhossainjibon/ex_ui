export const AUTH_SIGN_UP = "AUTH_SIGN_UP";
export const AUTH_SIGN_UP_SUCCESS = "AUTH_SIGN_UP_SUCCESS";
export const AUTH_SIGN_UP_FAILURE = "AUTH_SIGN_UP_FAILURE";
export const AUTH_EMAIL_VERIFICATION = "AUTH_EMAIL_VERIFICATION";
export const AUTH_EMAIL_VERIFICATION_SUCCESS =
  "AUTH_EMAIL_VERIFICATION_SUCCESS";
export const AUTH_EMAIL_VERIFICATION_FAILURE =
  "AUTH_EMAIL_VERIFICATION_FAILURE";
export const AUTH_2FA_VERIFICATION = "AUTH_2FA_VERIFICATION";
export const AUTH_2FA_VERIFICATION_SUCCESS = "AUTH_2FA_VERIFICATION_SUCCESS";
export const AUTH_2FA_VERIFICATION_FAILURE = "AUTH_2FA_VERIFICATION_FAILURE";
export const AUTH_OTP_VERIFICATION = "AUTH_OTP_VERIFICATION";
export const AUTH_OTP_VERIFICATION_SUCCESS = "AUTH_OTP_VERIFICATION_SUCCESS";
export const AUTH_OTP_VERIFICATION_FAILURE = "AUTH_OTP_VERIFICATION_FAILURE";
export const AUTH_SIGN_IN_FETCH = "AUTH_SIGN_IN_FETCH";
export const AUTH_SIGN_IN_SUCCESS = "AUTH_SIGN_IN_SUCCESS";
export const AUTH_SIGN_IN_FAILURE = "AUTH_SIGN_IN_FAILURE";

const initialState = {
  require2FA: false,
  requireVerification: false,
  emailVerified: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_EMAIL_VERIFICATION:
      return { ...state, emailVerified: action.payload };
    default:
      return state;
  }
};
