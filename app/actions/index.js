import {Alert} from 'react-native';
export const successfullLogin = () => {
  return {
    type: 'LOGIN_SUCCESSFULL',
    email: '',
    password: '',
    errorMsg: '',
    loggedIn: true
  }
}

export const failedLogin = (errorMsg) => {
  return {
    type: 'LOGIN_FAILED',
    email: '',
    password: '',
    errorMsg: errorMsg,
    loggedIn: false
  }
}


const validateEmailPassword = (email, password) => {
  if(email === '' || password === ''){
    return 'Email/password Cannot be blank.'
  }
  else{
  	return 'true';
  }

}



export const submitLoginForm = (email, password, navigator) => {
  return (dispatch) => {

    if (email === 'example@gmail.com' && password === 'josh12345') {
     setTimeout(() => {
        dispatch(
         successfullLogin()
        );
        navigator.push({name: 'Dashboard', title: "Dashboard"})
     }, 2000);
    }
    else {
      if(validateEmailPassword(email, password) == 'true'){
	      setTimeout(() => {
	        dispatch(
	          failedLogin('Login failed due to invalid credentials.')
	        );
	      }, 2000);
	    }
	    else{
        dispatch(failedLogin(validateEmailPassword(email, password)))
	    }
    }
  }
}

export const addUser = (name, dob, age, profile_completed) => {
  return{
    type: "ADD_USER",
    name: name,
    dob: dob,
    age: age,
    profile_completed: profile_completed
  }
}