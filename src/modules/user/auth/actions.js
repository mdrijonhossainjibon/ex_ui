import { AUTH_SIGN_IN_FETCH, AUTH_SIGN_UP_ERROR } from "./constants";

export const signIn = (payload) => ({
  type: 'AUTH_EMAIL_VERIFICATION',
  payload,
});
