const initialState = {
  email: '',
  password: '',
  errorMsg: '',
  loggedIn: false,
  disabledLogin: true,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
  	case 'LOGIN_FAILED':
    case 'LOGIN_SUCCESSFULL':
      return {
        ...state,
        email: action.email,
        password: action.password,
        errorMsg: action.errorMsg,
        loggedIn: action.loggedIn
      }
      default:
       return state
  }
}
export default LoginReducer;
