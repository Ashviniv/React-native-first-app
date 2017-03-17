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
UserInitialState = {
  name: '',
  dob: "",
  profile_completed: '',
  age: 0
}

export const UserReducer = (state = UserInitialState, action) => {
  switch (action.type) {
    case 'ADD_USER': 
       return {
        ...state,
        name: action.email,
        dob: action.dob,
        profile_completed: action.profile_completed,
        age: action.age
       }
    default:
      return state
  }
}
export default LoginReducer;
