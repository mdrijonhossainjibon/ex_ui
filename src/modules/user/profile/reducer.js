import {
  PROFILE_CHANGE_PASSWORD_DATA,
  PROFILE_CHANGE_PASSWORD_ERROR,
  PROFILE_CHANGE_PASSWORD_FETCH,
  PROFILE_CHANGE_USER_DATA,
  PROFILE_CHANGE_USER_ERROR,
  PROFILE_CHANGE_USER_FETCH,
  PROFILE_CHANGE_USER_LEVEL,
  PROFILE_GENERATE_2FA_QRCODE_DATA,
  PROFILE_GENERATE_2FA_QRCODE_ERROR,
  PROFILE_GENERATE_2FA_QRCODE_FETCH,
  PROFILE_RESET_USER,
  PROFILE_TOGGLE_2FA_DATA,
  PROFILE_TOGGLE_2FA_ERROR,
  PROFILE_TOGGLE_2FA_FETCH,
  PROFILE_TOGGLE_USER_2FA,
  PROFILE_USER_DATA,
  PROFILE_USER_ERROR,
  PROFILE_USER_FETCH,
} from "./constants";

const ifUserIsLoggedIn = () => {
  const csrfTokenExist = localStorage.getItem("csrfToken");

  if (csrfTokenExist === null) {
    return false;
  }

  return true;
};

export const defaultUser = {
  email: "",
  level: 0,
  otp: false,
  role: "",
  state: "",
  uid: "",
  profiles: [],
  referal_uid: "",
  labels: [],
  phone: [],
  created_at: "",
  updated_at: "",
};

export const initialStateProfile = {
  passwordChange: {
    success: false,
  },
  twoFactorAuth: {
    barcode: "",
    url: "",
  },
  userData: {
    user: defaultUser,
    isFetching: ifUserIsLoggedIn(),
  },
};

const passwordChangeReducer = (state, action) => {
  switch (action.type) {
    case PROFILE_CHANGE_PASSWORD_FETCH:
      return {
        ...state,
        success: false,
        error: undefined,
      };
    case PROFILE_CHANGE_PASSWORD_DATA:
      return {
        ...state,
        success: true,
        error: undefined,
      };
    case PROFILE_CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const twoAuthReducer = (state, action) => {
  switch (action.type) {
    case PROFILE_GENERATE_2FA_QRCODE_FETCH:
      return {
        ...state,
        success: false,
        error: undefined,
        barcode: "",
        url: "",
      };
    case PROFILE_GENERATE_2FA_QRCODE_DATA:
      return {
        ...state,
        error: undefined,
        barcode: action.payload.barcode,
        url: action.payload.url,
      };
    case PROFILE_GENERATE_2FA_QRCODE_ERROR:
      return {
        ...state,
        success: false,
        error: action.payload,
        barcode: "",
        url: "",
      };
    case PROFILE_TOGGLE_2FA_FETCH:
      return {
        ...state,
        success: false,
        error: undefined,
      };
    case PROFILE_TOGGLE_2FA_DATA:
      return {
        ...state,
        success: true,
        error: undefined,
      };
    case PROFILE_TOGGLE_2FA_ERROR:
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case PROFILE_USER_FETCH:
      return {
        ...state,
        isFetching: true,
      };
    case PROFILE_USER_DATA:
      return {
        ...state,
        isFetching: false,
        user: action.payload.user,
      };
    case PROFILE_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case PROFILE_RESET_USER:
      return {
        ...state,
        user: initialStateProfile.userData.user,
      };
    case PROFILE_CHANGE_USER_LEVEL:
      return {
        ...state,
        user: {
          ...state.user,
          level: action.payload.level,
        },
      };
    case PROFILE_TOGGLE_USER_2FA:
      return {
        ...state,
        user: {
          ...state.user,
          otp: !state.user.otp,
        },
      };
    case PROFILE_CHANGE_USER_FETCH:
      return {
        ...state,
        success: false,
      };
    case PROFILE_CHANGE_USER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          data:
            (action.payload &&
              action.payload.user &&
              action.payload.user.data) ||
            state.user.data,
        },
        success: true,
      };
    case PROFILE_CHANGE_USER_ERROR:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export const profileReducer = (state = initialStateProfile, action) => {
  switch (action.type) {
    case PROFILE_CHANGE_PASSWORD_FETCH:
    case PROFILE_CHANGE_PASSWORD_DATA:
    case PROFILE_CHANGE_PASSWORD_ERROR:
      const passwordChangeState = { ...state.passwordChange };

      return {
        ...state,
        passwordChange: passwordChangeReducer(passwordChangeState, action),
      };

    case PROFILE_GENERATE_2FA_QRCODE_FETCH:
    case PROFILE_GENERATE_2FA_QRCODE_DATA:
    case PROFILE_GENERATE_2FA_QRCODE_ERROR:
    case PROFILE_TOGGLE_2FA_FETCH:
    case PROFILE_TOGGLE_2FA_DATA:
    case PROFILE_TOGGLE_2FA_ERROR:
      const twoFactorAuthState = { ...state.twoFactorAuth };

      return {
        ...state,
        twoFactorAuth: twoAuthReducer(twoFactorAuthState, action),
      };

    case PROFILE_USER_FETCH:
    case PROFILE_USER_DATA:
    case PROFILE_RESET_USER:
    case PROFILE_USER_ERROR:
    case PROFILE_CHANGE_USER_LEVEL:
    case PROFILE_TOGGLE_USER_2FA:
    case PROFILE_CHANGE_USER_FETCH:
    case PROFILE_CHANGE_USER_DATA:
    case PROFILE_CHANGE_USER_ERROR:
      const userState = { ...state.userData };

      return {
        ...state,
        userData: userReducer(userState, action),
      };

    default:
      return state;
  }
};
