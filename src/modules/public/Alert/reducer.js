import { ADD_NOTIFICATION } from './constants';
import { notification } from 'antd';
import { Toast } from 'antd-mobile';
const IsMobile = true;

export const notificationReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
    
      notification[action.payload.type]({
        message: action.payload.message,
        description: action.payload.description,
      });
      return [...state, action.payload];

    default:
      return state;
  }
};


