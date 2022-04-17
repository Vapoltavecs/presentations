interface IState {
  isAuth: boolean;
}

const initialState: IState = {
  isAuth: false,
};

const SET_AUTH = "SET_AUTH";

interface IAction {
  type: string;
  payload: boolean;
}

export const UserReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

export const setAuthAction = (payload: boolean) => ({
  type: SET_AUTH,
  payload,
});
